# Validations

The first rule of client-server communication is...

* Do not trust data from the client {.fragment data-index=1}

The second rule of client-server communication is... {.fragment data-index=2}

* ***Do not trust data from the client*** {.fragment data-index=3 style="color:var(--red)" .bigger}

<div class="fragment" data-index="4">  
<hr />

Defensive coding is necessary in the wild world of Internet applications

Client-side validations are common, but the server is the last line of defense and it cannot be sure a malicious actor hasn't circumvented those validations.

Always **validate** anything you intend to store or execute on the server side

</div>