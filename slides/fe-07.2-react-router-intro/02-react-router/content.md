# Routing

<div class="row">
<div class="cell-2">
<div class="node"><div class="node-inner" id="url">URL</div></div>

`/about` <br />
`/portfolio`

</div>
<div class="cell-2">
<div class="node"><div class="node-inner" id="router">React Router</div></div>
</div>
<div class="cell-2">
<div class="node"><div class="node-inner" id="react">React</div></div>

`<AboutMe />` <br />
`<Portfolio />`

</div>
</div>

<div class="line line-arrow-end" data-from="url" data-to="router"></div>
<div class="line line-arrow-end" data-from="router" data-to="react"></div>

* As a user you want to go to different URLs
* The URL is passed to React Router
* React Router takes the URL and shows or hides components based on whether the route matches

