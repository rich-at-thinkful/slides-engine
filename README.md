# Thinkful Slides

## Quickstart

```bash
# Clone the slides
git clone https://github.com/Thinkful-Ed/slides
cd slides

# Install the dependencies
npm i

# Start developing
npm start
```

## Structure

### Decks

A deck is a YAML file, contained in [the `decks` directory](decks).  The decks are organized into subfolders by course code.  The deck YAML must contain three pieces of information:

* title: The title of the slide deck.  This will be used to create a title slide.
* template: The template to use.  Currently, this should read `thinkful`.
* slides: An array of slides which the deck should contain.

### Slides

A slide is constructed from a directory of files in [the `slides` directory](slides).  The slides are grouped into subfolders by topic.  A slide directory must contain a `content.md`, containing Markdown for the slide.  It can also optionally contain a `notes.md` file, which contains speaker notes for the slide, and any image files which the slide uses.

### Templates

A template is a set of HTML, CSS and JS files which define the look and feel of the slide deck.  Currently, there's only one template, called `thinkful`.

## Output

Running `npm start` sets a build task and local server running.  When the deck, slides, or template changes, the slide decks will be rebuilt, with the output living in the `build` directory.

## Publishing

The slides are automatically published to https://thinkful-slides.netlify.com when changes are pushed to GitHub.  If you push to a branch other than master, they will be available at https://branchname--thinkful-slides.netlify.com.

## Features

### Speaker mode

Speaker mode allows you to see the current and upcoming slide, alongside any speaker notes.  The speaker view is automatically kept in sync as you navigate the presentation.  To view the slides in speaker mode, visit the slide's `speaker.html` page (for example, if the slide deck was at `/course-code/deck-name/`, you would visit `/course-code/deck-name/speaker.html`).

### Attributes

You can add HTML attributes directly to your Markdown in the slides, using [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs).  For example:

```md
# This is a heading {#some-id .some-class data-foo=bar}
```

Would produce the output:

```html
<h1 id="some-id" class="some-class" data-foo="bar">This is a heading</h1>
```

### Grid

The `thinkful` template contains an extremely simple six-column flexbox grid.  To have three columns of content, you could write the following markdown:

```md
<div class="row">
<div class="cell-2">

This is two columns wide

</div>
<div class="cell-3">

This is three columns wide

</div>
<div class="cell-1">

This is one column wide

</div>
</div>
```

### Fragments

Fragments allow you to add, remove, and highlight content as you navigate through an individual slide.  To create a fragment, you add the `fragment` class to an element.  You can optionally add a `data-index` attribute, which specifies when the item will show up, defaulting to `1`.

For example:

```md
* This item will always show
* This item will be added first {.fragment}
* This item will be added third {.fragment data-index=3}
* This item will be added second {data-index=2}
```

You can also change the behavior of the fragment using the `data-style` attribute.  This can be set to:

* `data-style="in"` - the fragment will be added to the page
* `data-style="out"` - the fragment will be removed from the page
* `data-style="in-out"` - the fragment will be added, then removed from the page
* `data-style="out-in"` - the fragment will be removed, then re-added to the page
* `data-style="highlight-in"` - the `highlight` class will be added to the fragment
* `data-style="highlight-out"` - the `highlight` class will be removed to the fragment
* `data-style="highlight-in-out"` - the `highlight` class will be added, then removed from the fragment
* `data-style="highlight-out-in"` - the `highlight` class will be removed, then re-added to the fragment

### Code highlights

You can highlight sections of code using the `highlight` class.  This can be done using the `data-span` attribute, which adds `<span>` tags to a code block.

The format of the `data-span` attribute is as follows:

```
data-span="line:start-character-inclusive:end-character-inclusive attributes"
```

If you want to highlight multiple sections of a code block, you can separate the spans using a semi-colon.

For example, here we add the highlight class to the function name (`helloWorld`, which is line 1, characters 10-19), and name of the log function (`console.log`, which is line 2, characters 5-15):

````md
```js {data-span="1:10:19 .highlight; 2:5:15 .highlight"}
function helloWorld() {
    console.log('Hello world');
}
```
````

You can use this in conjunction with fragments.  For example, the following code would highlight `helloWorld` as the second fragment:

````md
```js {data-span="1:10:19 .fragment data-style=highlight-in data-index=2"}
function helloWorld() {
    console.log('Hello world');
}
```
````

### Code annotation

You can annotate a particular line of code using the `annotate` class.  This will link your annotation with a particular line of a code block.  When you annotate code, you _must_ use the `data-for` attribute to identify the ID of the code block.  You can optionally also use the `data-line` attribute to point the annotation to a particular line of code.  It defaults to line 1.

For example, to annotate the body of a `sayHello` function:

````md
<!-- Set up grid so annotation is next to code -->
<div class="row">
<div class="cell-4">

```js {#console-log-example}
function sayHello() {
    console.log('Hello world');
}
```

</div>
<div class="cell-2">

Logs the string "Hello world" to the console {.annotation data-for="console-log-example" data-line="2"}

</div>
</div>
````

### Lines

If you want to draw a line between two HTML elements, you can use the `line` class.  You must use the `data-from` and `data-to` attributes to identify the IDs of the elements to draw the line between.  You can optionally use the `line-arrow-start` and `line-arrow-end` classes, which will add an arrow to the start or end of the line respectively.  For example, to draw a line with an arrow between two headings:

```md
## Before {#before}

Look at what happened before

## After {#after}

Look at what happened after


<div class="line line-arrow-start" data-from="before" data-to="after"></div>
```

By default, it will automatically work out which side of the elements to draw the line from and to.  To override this, you can use the `data-from-side` and `data-to-side` attributes, which can be set to one of the following values:

* `t` - Top middle
* `b` - Bottom middle
* `l` - Left middle
* `r` - Right middle
* `m` - Middle
* `tl` - Top left, line starts vertically
* `tr` - Top right, line starts vertically
* `bl` - Bottom left, line starts vertically
* `br` - Bottom right, line starts vertically
* `lt` - Top left, line starts horizontally
* `rt` - Top right, line starts horizontally
* `lb` - Bottom left, line starts horizontally
* `rb` - Bottom right, line starts horizontally

