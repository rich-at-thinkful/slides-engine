# Component composition

<style>
#component-tree .row {
    margin-bottom: 50px;
}
</style>

<div class="center" id="component-tree">
<div class="row">
<div class="cell-2"></div>

<div class="cell-2">

`<App />` {#tree-app}

</div>

<div class="cell-2"></div>
</div>

<div class="row">
<div class="cell-2">

`<Header />` {#tree-header}

</div>
<div class="cell-2">

`<PersonList />` {#tree-person-list}

</div>
<div class="cell-2">

`<Footer />` {#tree-footer}

</div>
</div>

<div class="row">
<div class="cell-1"></div>
<div class="cell-4">

<div class="row">

`<Person />` {#tree-person-1}

`<Person />` {#tree-person-2}

`<Person />` {#tree-person-3}

</div>

</div>
<div class="cell-1"></div>
</div>
</div>

<div class="line" data-from="tree-app" data-to="tree-header" data-from-side="b" data-to-side="t"></div>
<div class="line" data-from="tree-app" data-to="tree-person-list" data-from-side="b" data-to-side="t"></div>
<div class="line" data-from="tree-app" data-to="tree-footer" data-from-side="b" data-to-side="t"></div>
<div class="line" data-from="tree-person-list" data-to="tree-person-1" data-from-side="b" data-to-side="t"></div>
<div class="line" data-from="tree-person-list" data-to="tree-person-2" data-from-side="b" data-to-side="t"></div>
<div class="line" data-from="tree-person-list" data-to="tree-person-3" data-from-side="b" data-to-side="t"></div>
