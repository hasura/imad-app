 $(document).ready(function(){

    // Initialize the object on dom load
    var navigator = new Navigator({
        carousel: '#carousel',
        nextButton: '.arrow.next',
        prevButton: '.arrow.prev',
        // chunkSize:3,
        shuffle: true
    });

    navigator.init();
});

// A Navigator "class" responsible for navigating through the carousel.
function Navigator(config) {

    this.carousel = $(config.carousel); //the carousel element
    this.nextButton = $(config.nextButton); //the next button element
    this.prevButton = $(config.prevButton); //the previous button element
    this.chunkSize = config.chunkSize || 3; //how many items to show at a time (maximum)
    this.shuffle = config.shuffle || false; //should the list be shuffled first? Default is false.

    //private variables
    this._items = $(config.carousel + ' li'); //all the items in the carousel
    this._chunks = []; //the li elements will be split into chunks.
    this._visibleChunkIndex = 0; //identifies the index from the this._chunks array that is currently being shown

    this.init = function () {

        // This will initialize the class, bind event handlers,
        // shuffle the li items, split the #carousel list into chunks

    };

    // Method for handling arrow clicks
    this.handlePrevClick = function(e) {};
    this.handleNextClick = function(e) {};

    // show the next chunk of 3 lis
    this.showNextItems = function() {};

    // show the previous chunk of 3 lis
    this.showPrevItems = function() {};

    // These methods will determine whether to
    // show or hide the arrows (marked as private)
    this._checkForBeginning = function() {};
    this._checkForEnd = function() {};

    // A helper function for splitting the li
    // items into groups of 3
    this._splitItems = function(items, chunk) {};
}

this.init = function () {

    //Shuffle the array if neccessary
    if (this.shuffle) {
        //remove visible tags
        this._items.removeClass('visible');

        //shuffle list
        this._items.sort(function() { return 0.5 - Math.random() });

        //add visible class to first "chunkSize" items
        this._items.slice(0, this.chunkSize).addClass('visible');
    }

    //split array of items into chunks
    this._chunks = this._splitItems(this._items, this.chunkSize);

    var self = this;

    //Set up the event handlers for previous and next button click
    self.nextButton.on('click', function(e) {
        self.handleNextClick(e);
    }).show();

    self.prevButton.on('click', function(e) {
        self.handlePrevClick(e);
    });

    // Showing the carousel on load
    self.carousel.addClass('active');
};
 

this.handlePrevClick = function (e) {

    e.preventDefault();

    //as long as there are some items before the current visible ones, show the previous ones
    if (this._chunks[this._visibleChunkIndex - 1] !== undefined) {
        this.showPrevItems();
    }
};

this.handleNextClick = function(e) {

    e.preventDefault();

    //as long as there are some items after the current visible ones, show the next ones
    if (this._chunks[this._visibleChunkIndex + 1] !== undefined) {
        this.showNextItems();
    }
};
 

this.showNextItems = function() {

    //remove visible class from current visible chunk
    $(this._chunks[this._visibleChunkIndex]).removeClass('visible');

    //add visible class to the next chunk
    $(this._chunks[this._visibleChunkIndex + 1]).addClass('visible');

    //update the current visible chunk
    this._visibleChunkIndex++;

    //see if the end of the list has been reached.
    this._checkForEnd();

};

this.showPrevItems = function() {

    //remove visible class from current visible chunk
    $(this._chunks[this._visibleChunkIndex]).removeClass('visible');

    //add visible class to the previous chunk
    $(this._chunks[this._visibleChunkIndex - 1]).addClass('visible');

    //update the current visible chunk
    this._visibleChunkIndex--;

    //see if the beginning of the carousel has been reached.
    this._checkForBeginning();

};

this._checkForBeginning = function() {
    this.nextButton.show(); //the prev button was clicked, so the next button can show.

    if (this._chunks[this._visibleChunkIndex - 1] === undefined) {
        this.prevButton.hide();
    }
    else {
        this.prevButton.show();
    }
};

this._checkForEnd = function() {
    this.prevButton.show(); //the next button was clicked, so the previous button can show.

    if (this._chunks[this._visibleChunkIndex + 1] === undefined) {
        this.nextButton.hide();
    }
    else {
        this.nextButton.show();
    }
};
 

this._splitItems = function(items, chunk) {

    var splitItems = [],
    i = 0;

    while (items.length > 0) {
        splitItems[i] = items.splice(0, chunk);
        i++;
    }

    return splitItems;

};