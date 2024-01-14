const form = document.forms[0];
const container = document.querySelector('.container');
const btn = document.querySelector('.calc-btn');
const clearBtn = document.querySelector('.clear-btn')
const resultWrapper = document.querySelector('.result-wrapper');
const label = document.querySelector("label");
const ageInput = document.getElementById('age');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const backdropp = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal-btn');
const male = document.getElementById('male');
const female = document.getElementById('female');


// male.addEventListener('change', onMaleBtnChange);
// female.addEventListener('change', onFemaleBtnChange);

// function onFemaleBtnChange(evt) {
//     console.log(evt)
// }

// function onMaleBtnChange() {
    
// }




ageInput.addEventListener("input", onInputAgeChange);
weightInput.addEventListener('input', onInputWeightChange);
heightInput.addEventListener('input', onInputHeightChange);

form.addEventListener('submit', calculate);
form.addEventListener('change', onSexChange);

modalBtn.addEventListener('click', onModalClose);
backdropp.addEventListener('click', onBackdropClick);

clearBtn.addEventListener('click', onClearBtnClick);

function onClearBtnClick() {
        if (resultWrapper.innerHTML) {
            resultWrapper.innerHTML = "";
        }
    if (document.querySelector('.errorAgeSec').style.display === "block" && document.querySelector('.errorAge').style.display === "block") {
             document.querySelector('.errorAgeSec').style.display = "none";
        ageInput.classList.remove('invalidAge');
                     document.querySelector('.errorAge').style.display = "none";
        ageInput.classList.remove('invalid');
    }
    else if ( document.querySelector('.errorAge').style.display === "block") {
             document.querySelector('.errorAge').style.display = "none";
        ageInput.classList.remove('invalid');
    } else  if ( document.querySelector('.errorAgeSec').style.display === "block") {
             document.querySelector('.errorAgeSec').style.display = "none";
        ageInput.classList.remove('invalidAge');
    }

     
    if (document.querySelector('.errorWeightSec').style.display === "block" && document.querySelector('.errorWeight').style.display === "block") {
             document.querySelector('.errorWeightSec').style.display = "none";
        weightInput.classList.remove('invalidAge');
                     document.querySelector('.errorWeight').style.display = "none";
        weightInput.classList.remove('invalid');
    }
    else if ( document.querySelector('.errorWeight').style.display === "block") {
             document.querySelector('.errorWeight').style.display = "none";
        weightInput.classList.remove('invalid');
    } else  if ( document.querySelector('.errorWeightSec').style.display === "block") {
             document.querySelector('.errorWeightSec').style.display = "none";
        weightInput.classList.remove('invalidAge');
    }


    if (document.querySelector('.errorHeightSec').style.display === "block" && document.querySelector('.errorHeight').style.display === "block") {
             document.querySelector('.errorHeightSec').style.display = "none";
        heightInput.classList.remove('invalidAge');
                     document.querySelector('.errorHeight').style.display = "none";
       heightInput.classList.remove('invalid');
    }
    else if ( document.querySelector('.errorHeight').style.display === "block") {
             document.querySelector('.errorHeight').style.display = "none";
        heightInput.classList.remove('invalid');
    } else  if ( document.querySelector('.errorHeightSec').style.display === "block") {
             document.querySelector('.errorHeightSec').style.display = "none";
       heightInput.classList.remove('invalidAge');
    }

    ageInput.value = "";
    weightInput.value = "";
    heightInput.value = "";
}

function onBackdropClick(evt) {
    if (evt.currentTarget === evt.target) {
        onModalClose();
    }
}

function onEscPress(evt) {
    if (evt.code === "Escape") {
        onModalClose();
    }
}

function onModalClose() {
    backdropp.classList.toggle('backdrop_open');
    modal.classList.toggle('modal_open')
    document.removeEventListener('keydown', onEscPress);
}

function showModal() {
    backdropp.classList.toggle('backdrop_open');
    modal.classList.toggle('modal_open')
    document.addEventListener('keydown', onEscPress);
}


function onInputAgeChange(evt) {
    if (isNaN(+evt.currentTarget.value)) {
        document.querySelector('.errorAge').style.display = "block";
        evt.currentTarget.classList.add('invalid');

    } else {
        document.querySelector('.errorAge').style.display = "none";
        evt.currentTarget.classList.remove('invalid');

    }
    if (evt.currentTarget.value[0] === "0") {
        document.querySelector(".errorAgeSec").style.display = "block";
        evt.currentTarget.classList.add('invalidAge');

    } else {
        document.querySelector(".errorAgeSec").style.display = "none";
        evt.currentTarget.classList.remove('invalidAge');

    }

}

function onInputWeightChange(evt) {
    if (isNaN(+evt.currentTarget.value)) {
        document.querySelector('.errorWeight').style.display = "block";
        evt.currentTarget.classList.add('invalid');
    } else {
        document.querySelector('.errorWeight').style.display = "none";
        evt.currentTarget.classList.remove('invalid');
    }
    if (evt.currentTarget.value[0] === "0") {
        document.querySelector(".errorWeightSec").style.display = "block";
        evt.currentTarget.classList.add('invalidAge');
    } else {
        document.querySelector(".errorWeightSec").style.display = "none";
        evt.currentTarget.classList.remove('invalidAge');
    }
}

function onInputHeightChange(evt) {
    if (isNaN(+evt.currentTarget.value)) {
        document.querySelector('.errorHeight').style.display = "block";
        evt.currentTarget.classList.add('invalid');
    } else {
        document.querySelector('.errorHeight').style.display = "none";
        evt.currentTarget.classList.remove('invalid');
    }
    if (evt.currentTarget.value[0] === "0") {
        document.querySelector(".errorHeightSec").style.display = "block";
        evt.currentTarget.classList.add('invalidAge');
    } else {
        document.querySelector(".errorHeightSec").style.display = "none";
        evt.currentTarget.classList.remove('invalidAge');
    }
}


function onSexChange(evt) {
    const form = evt.currentTarget;
    const female = Array.from(form.elements.gender).find(item => {
        return item.dataset.id === 'female'
    });
    const male = Array.from(form.elements.gender).find(item => {
        return item.dataset.id === 'male'
    });

    if (form.elements.gender.value === "female") {
        female.classList.add('checked');
        if (male.classList.contains('checked')) {
            male.classList.remove('checked')
        }

         document.body.style.background = "linear-gradient(to right, rgba(215, 82, 255, 0.7), rgba(147, 51, 176, 0.7), rgba(99, 32, 120, 0.7))";
        document.body.style.color = "black";
        btn.style.backgroundColor = " rgb(239, 239, 87)";
        btn.style.color = "black";
        clearBtn.style.backgroundColor = " rgb(239, 239, 87)";
        clearBtn.style.color = "black";
        female.style.color = "black"
       
   
    }
    

 if (form.elements.gender.value === "male") {
        male.classList.add('checked');
        if (female.classList.contains('checked')) {
            female.classList.remove('checked')
        }
      document.body.style.background = "linear-gradient(to right, #3279d1, #245999, #1a4070)"
        document.body.style.color = "white";
        btn.style.backgroundColor = "orange";
        btn.style.color = "white";
        clearBtn.style.backgroundColor = "orange";
     clearBtn.style.color = "white";
     female.style.color = "white"
  
}
    // if (form.elements.sex.value === "Male") {

    //     if (resultWrapper.innerHTML) {
    //         resultWrapper.innerHTML = "";
    //     }
    //     document.body.style.background = "linear-gradient(to right, #3279d1, #245999, #1a4070)"
    //     document.body.style.color = "white";
    //     btn.style.backgroundColor = "orange";
    //     btn.style.color = "white";
    //     clearBtn.style.backgroundColor = "orange";
    //     clearBtn.style.color = "white";

   

    // } else if (form.elements.sex.value === "Female") {

    //     if (resultWrapper.innerHTML) {
    //         resultWrapper.innerHTML = "";
    //     }

    //     document.body.style.background = "linear-gradient(to right, rgba(215, 82, 255, 0.7), rgba(147, 51, 176, 0.7), rgba(99, 32, 120, 0.7))";
    //     document.body.style.color = "black";
    //     btn.style.backgroundColor = " rgb(239, 239, 87)";
    //     btn.style.color = "black";
    //     clearBtn.style.backgroundColor = " rgb(239, 239, 87)";
    //     clearBtn.style.color = "black";
      
    // }
}

function calculate(evt) {
    evt.preventDefault();
    resultWrapper.innerHTML = "";
    const form = evt.currentTarget;
    const activeIndex = form.elements.activity.selectedIndex;
    const text = form.elements.activity[activeIndex].textContent;

    // const sex = form.elements.sex.value
    const sex = Array.from(form.elements.gender).find(item => {
        return item.checked
    }).dataset.id
    console.log(sex)
    const age = Number(form.elements.age.value);
    const weight = Number(form.elements.weight.value);
    const height = Number(form.elements.height.value);
    const activity = Number(form.elements.activity.value);

    if (age === 0 || weight === 0 || height === 0) {

        // alert("Age, weight or height can't be equal to 0 or empty field");
        showModal();

        evt.currentTarget.elements.age.classList.remove('invalidAge');
        evt.currentTarget.elements.weight.classList.remove('invalidAge');
        evt.currentTarget.elements.height.classList.remove('invalidAge');

        evt.currentTarget.elements.age.classList.remove('invalid');
        evt.currentTarget.elements.weight.classList.remove('invalid');
        evt.currentTarget.elements.height.classList.remove('invalid');
        // form.reset();
        return
    }
    if (isNaN(age) || isNaN(weight) || isNaN(height)) {

        // form.reset();
        // alert("Age, weight or height should equal to digits");
        showModal()
        evt.currentTarget.elements.age.classList.remove('invalid');
        evt.currentTarget.elements.weight.classList.remove('invalid');
        evt.currentTarget.elements.height.classList.remove('invalid');

        evt.currentTarget.elements.age.classList.remove('invalidAge');
        evt.currentTarget.elements.weight.classList.remove('invalidAge');
        evt.currentTarget.elements.height.classList.remove('invalidAge');

        return
    }
    // if (form.elements.sex.value === "Male")
        if (Array.from(form.elements.gender).find(item => {
        return item.checked
    }).dataset.id === 'male')
    {
       
        document.body.style.backgroundColor = "#3279d1"
        const calories = ((66.5 + 13.75 * weight + 5.003 * height - 6.775 * age) * activity).toFixed(2);
        const proteins = +calories * 0.3 / 4;
        const fat = +calories * 0.3 / 9;
        const carb = +calories * 0.4 / 4;
            renderResult(
                sex,
                age, weight, height, text, calories, proteins, fat, carb);

        form.elements.age.value = "";
        form.elements.weight.value = "";
        form.elements.height.value = "";


        } else if (Array.from(form.elements.gender).find(item => {
        return item.checked
    }).dataset.id === 'female')
        // else if (form.elements.sex.value === "Female")
    
        {


        const calories = ((655.1 + 9.563 * weight + 1.85 * height - 4.676 * age) * activity).toFixed(2);
        const numberCalories = Number(calories)
        const proteins = numberCalories * 0.3 / 4;
        const fat = numberCalories * 0.3 / 9;
        const carb = numberCalories * 0.4 / 4;
            renderResult(
                sex,
                age, weight, height, text, calories, proteins, fat, carb);
        form.reset()

    }

}

function renderResult(sex, age, weight, height, text, ...rest) {
    const names = ["Kcal", "Proteins", "Fats", "Carbohydrates"];
    let i = 0;
    const fragment = document.createDocumentFragment();

    const resultInnerWrapper = document.createElement('div');
    resultInnerWrapper.classList.add('result-inner-wrapper');

    const title = document.createElement('h2');
    title.classList.add('title');
    title.innerHTML = `${sex[0].toUpperCase()+sex.slice(1)} daily norm of calories, proteins, fats and carbohydrates <br> (${age} years old, ${weight} kg and ${height} cm height) <br> with ${text.toLowerCase()} is:`

    rest.forEach(item => {
        const result = document.createElement('p');
        result.classList.add('result-text');
        result.innerHTML = `${names[i]}: <span class="name"> ${parseInt(item)}</span>`;
        resultInnerWrapper.appendChild(result)
        i++
    })
    fragment.append(title, resultInnerWrapper);

    resultWrapper.appendChild(fragment)

}