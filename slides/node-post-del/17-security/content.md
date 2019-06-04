<div class="row">
<div class="cell-4">

# Security Considerations

<div class="smaller">

* Is user authorized to access API?

* Is user authorized to access that **specific action**? (e.g. delete vs get) {.fragment data-index=1}

* Deny too many requests (spamming) {.fragment data-index=2}

* Only touched the surface on validations...  {.fragment data-index=3}
  * Sanitation libraries are good at protecting from **injection** attacks {.smaller .fragment data-index=3} 

* Logging is critical {.fragment data-index=4}
  * `morgan` logs HTTP req/res, but as server administrators, we should log additional output on failed or suspicious activity {.smaller .fragment data-index=4} 

* Prevent requests without sufficient header info (e.g. content type) {.fragment data-index=5}

* Keep error responses in Production generic - don't send a stack trace to a client as it may reveal exploitable information about your program structure {.fragment data-index=6}

* Configure CORS as strictly as possible for your use case {.fragment data-index=7}

</div>
</div>
<div class="cell-2">

![padlock](padlock.svg){style=width:150px}

</div>
</div>
