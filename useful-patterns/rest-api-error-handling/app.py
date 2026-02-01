from flask import Flask, jsonify, request

app = Flask(__name__)

def problem(type_, title, status, detail=None, instance=None, **extra):
    """
    RFC 9457-ish "Problem Details" helper.
    (Flask will JSON-encode dicts fine; we keep it explicit.)
    """
    body = {
        "type": type_,
        "title": title,
        "status": status,
    }
    if detail is not None:
        body["detail"] = detail
    if instance is not None:
        body["instance"] = instance

    # Add any extra fields (e.g. "errors": [...])
    body.update(extra)
    return jsonify(body), status

@app.get("/")
def index():
    return jsonify({
        "message": "Hello. Try /ok, /status/418, /echo, /problem, /validate"
    })

@app.get("/ok")
def ok():
    return jsonify({"ok": True}), 200

@app.get("/status/<int:code>")
def any_status(code: int):
    # lets you return any status code with a JSON body
    return jsonify({"status": code, "note": "custom status"}), code

@app.post("/echo")
def echo():
    # echoes request body as JSON, with 200 by default or ?code=201 etc.
    payload = request.get_json(silent=True)
    code = request.args.get("code", default=200, type=int)
    return jsonify({
        "you_sent": payload,
        "content_type": request.content_type
    }), code

@app.get("/problem")
def example_problem():
    # Example RFC-9457-ish error
    return problem(
        type_="https://example.com/problems/out-of-cheese",
        title="Out of cheese",
        status=409,
        detail="The requested operation requires cheese, but inventory is empty.",
        instance=request.path,
        errors=[{"field": "cheeseType", "reason": "Must be one of: gouda, cheddar"}],
    )

@app.post("/validate")
def validate():
    """
    Example: expects {"name": "...", "category": "..."}.
    Returns 400 with field errors like you'd handle in UI.
    """
    data = request.get_json(silent=True) or {}
    errors = []

    name = data.get("name")
    category = data.get("category")

    if not isinstance(name, str) or len(name.strip()) < 3:
        errors.append({"field": "name", "reason": "Must be at least 3 characters."})
    if category not in {"fruit", "veg", "dairy"}:
        errors.append({"field": "category", "reason": "Must be one of: fruit, veg, dairy."})

    if errors:
        return problem(
            type_="https://example.com/problems/validation-error",
            title="Validation error",
            status=400,
            detail="Some fields are invalid.",
            instance=request.path,
            errors=errors,
        )

    return jsonify({"ok": True, "received": data}), 200


# Optional: demonstrate server-side crash -> 500 JSON
@app.get("/boom")
def boom():
    raise RuntimeError("Boom")

@app.errorhandler(500)
def handle_500(e):
    # Convert unhandled errors to a JSON problem response (for debugging / API clients)
    return problem(
        type_="about:blank",
        title="Internal Server Error",
        status=500,
        detail=str(e),
        instance=request.path,
    )

@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    return response

if __name__ == "__main__":
    # debug=True gives you nice tracebacks in console and auto-reload
    app.run(host="127.0.0.1", port=5000, debug=True)
