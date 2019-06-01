# Blogful Over Time

* Initially, our API just has a `blogful_articles` table to store all blogs


* A future iteration might: {.fragment data-index=1}

<div class="row">
  <div class="cell-3">
    <div class="smallest" style="padding-left:20px;">

* store users for different blog ownership {.fragment data-index=1}
* have a "draft" and "publish" state for blogs {.fragment data-index=3}
* allow users to comment on blogs {.fragment data-index=5}
* ...and more! {.fragment data-index=7}
    
    </div>
  </div>

  <div class="cell-3">
    <div class="smallest">

  * *migration:* **create a new users table** {.fragment data-index="2" style="color:blue;list-style-type:none"}
  * *migration:* **add a column to articles** {.fragment data-index="4" style="color:blue;list-style-type:none"}
  * *migration:* **create a comments table** {.fragment data-index="6" style="color:blue;list-style-type:none"}
  
    </div>
  </div>
</div>

* We don't know what our database might need in the future, so migrations can alter structure over time {.fragment data-index=8}