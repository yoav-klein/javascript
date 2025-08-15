# Collapsable Sidebar
---

based on https://www.youtube.com/watch?v=R7b3OlEyqug

This is a demonstration of a collapsable sidebar with a menu. The menu also contains menu items 
that open into a sub-menu.

## Sidebar
The trick is this: we have a container (body) with 2 sub-elements: <nav> and <main>. 
We set `display: grid` on the body, with `<nav>` taking auto and `main` taking `1fr` so that
main will use all the available space.
Then we set a certain width on the sidebar, and by toggling the `.close` class on the sidebar
we play with the width of the sidebar. This is the main catch.

The way we keep the sidebar fixed to the side and not scrolling down is with `position: sticky`.

## Submenu
Same as with sidebar, the main trick is to toggle a `.close` or `.show` class on the submenu element 
so when we click the button it will appear/disappear.
But in this case it's a bit tricky, since we want a smooth animation using `transition`. If we toggle 
a class with `display: none` and `display: block`, transition won't work. (why? because.).
So the trick we do is make the submenu as a grid, and then include in it only one div, and then toggle the 
`grid-template-rows` property - 0 and 1.

## Responsiveness
when opening in small screens (mobile devices) we change to toggle the `transform: translateX()` CSS property. This is due to better performance.
In small screens, we want the menu to be on top of the main content, not the main content shrink a little like in a big screen.
For this, we use `position: fixed` on the sidebar.
