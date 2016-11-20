var carousel = new ch.Carousel(ch('.demo-carousel')[0], {
    pagination: false
});
var tabs = new ch.Tabs(ch(".demo-tabs")[0]);

function makeOptions (id) {
    var select, i, option;

    select = document.getElementById( id );

    for ( i = 1; i <= 10; i += 1 ) {
        option = document.createElement( 'option' );
        option.value = option.text = i;
        select.add( option );
    };
}