const toggleActive = (id) => {
  const elementoToRemove = document.getElementsByClassName("nav-item");
  const element = document.getElementById(id);

  for (let index = 0; index < elementoToRemove.length; index++) {
    const a = elementoToRemove[index];
    if (a.classList.contains("active")) {
      a.classList.remove("active");
    }
  }

  element.classList.add("active");
};

const moveCarouselRight = () => {
  const containerElement = document.getElementById("circles-div");
  const elements = document.getElementsByClassName("circle-item");
  const arrayElements = Array.prototype.slice.call(elements);
  let arr = new Array(arrayElements.length);

  for (let index = 0; index < arrayElements.length; index++) {
    const element = arrayElements[index];
    if (arrayElements.indexOf(element) === 3) {
      arr.splice(0, 1, element);
    } else {
      arr.splice(index + 1, 1, element);
    }
  }

  arr.map((value) => containerElement.appendChild(value));
};

const moveCarouselLeft = () => {
  const containerElement = document.getElementById("circles-div");
  const elements = document.getElementsByClassName("circle-item");
  const arrayElements = Array.prototype.slice.call(elements);
  let arr = new Array(arrayElements.length);

  for (let index = 0; index < arrayElements.length; index++) {
    const element = arrayElements[index];
    if (arrayElements.indexOf(element) === 0) {
      arr.splice(3, 1, element);
    } else {
      arr.splice(index - 1, 1, element);
    }
  }

  arr.map((value) => containerElement.appendChild(value));
};

const viewWidth = () => {
  let width = window.screen.width;
  let height = window.screen.height;

  console.log(`resolucion = ${width} x ${height}`);
};
