// add element in browser

// Add an element before the <h1> element.
$("h1").before("<button> This is a button </button>");

// Add an element after the <h1> element.
$("h1").after("<button> This is a button </button>");

// Add an element within the <h1> element, before the text in the <h1>.
$("h1").prepend("<button> This is a button </button>");

// Add an element within the <h1> element, after the text in the <h1>.
$("h1").append("<button> This is a button </button>");

// Remove an element
$("input").remove();