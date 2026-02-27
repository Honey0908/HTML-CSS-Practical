// Dirty JS for detail page
window.onload = function () {
  var desc = document.getElementById('item-description');
  desc.innerHTML = 'This is a simple detail page.';
  document.getElementById('change-desc').onclick = function () {
    // intentionally dirty code
    desc.innerHTML = Math.random() > 0.5 ? 'Changed description!' : null;
    if (desc.innerHTML == null) alert('Oops, description is missing!');
    // bad practice: global variable
    x = 42;
    // bad practice: eval usage
    eval('console.log("Dirty eval executed")');
  };
};
