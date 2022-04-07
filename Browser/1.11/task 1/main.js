function positionAt(anchor, position, elem) {

    let curcoords = anchor.getBoundingClientRect();

    switch (position) {
      case "top":
        elem.style.left = curcoords.left + "px";
        elem.style.top = curcoords.top - elem.offsetHeight + "px";
        break;

      case "right":
        elem.style.left = curcoords.left + anchor.offsetWidth + "px";
        elem.style.top = curcoords.top + "px";
        break;

      case "bottom":
        elem.style.left = curcoords.left + "px";
        elem.style.top = curcoords.top + anchor.offsetHeight + "px";
        break;
    }

  }


  function showNote(anchor, position, html) {

    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
  }

  // проверка
  let blockquote = document.querySelector('blockquote');

  showNote(blockquote, "top", "note above");
  showNote(blockquote, "right", "note at the right");
  showNote(blockquote, "bottom", "note below");

