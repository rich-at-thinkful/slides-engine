# Why chain promises?

## Performing one asynchronous task after another

<div class="row">
<div class="cell-4">

* Make an AJAX request for a user's information
* Decode the user data in the response to obtain a URL for the user's avatar
* Make an AJAX request for the user's avatar
* Decode the image in the response
* Create an `<img>` tag containing the image

</div>
<div class="cell-2">

<div class="node" id="chain-a"><div class="node-inner"></div></div>
<div class="node" id="chain-b"><div class="node-inner"></div></div>
<div class="node" id="chain-c"><div class="node-inner"></div></div>
<div class="node" id="chain-d"><div class="node-inner"></div></div>
<div class="node" id="chain-e"><div class="node-inner"></div></div>

<div class="line" data-from="chain-a" data-to="chain-b"></div>
<div class="line" data-from="chain-b" data-to="chain-c"></div>
<div class="line" data-from="chain-c" data-to="chain-d"></div>
<div class="line" data-from="chain-d" data-to="chain-e"></div>

</div>
</div>
