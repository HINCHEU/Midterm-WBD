window.onload = function () {
  document.querySelector('.question.result').style.display = 'none';
};

function validateForm() {
  var fullname = document.getElementById("fullname");
  var gender = document.getElementById("gender");
  var classx = document.getElementById("classx");
  var dob = document.getElementById("dob");

  if (fullname.value == "") {
    fullname.classList.add("error");
  } else {
    fullname.classList.remove("error");
  }

  if (gender.value == "") {
    gender.classList.add("error");
  } else {
    gender.classList.remove("error");
  }

  if (classx.value == "") {
    classx.classList.add("error");
  } else {
    classx.classList.remove("error");
  }

  if (dob.value == "") {
    dob.classList.add("error");
  } else {
    dob.classList.remove("error");
  }
}
fullname.addEventListener("input", validateForm);
gender.addEventListener("input", validateForm);
classx.addEventListener("input", validateForm);
dob.addEventListener("input", validateForm);
//To the top
function scrollToTop() {
  window.scrollTo(0, 0);
}

const questions = [
    {
        id: "q1",
        options: ["q1_1", "q1_2", "q1_3"],
        scores: [4, 0, 0],
        sum: 0
      },
    {
      id: "q2",
      options: ["q2_1", "q2_2", "q2_3"],
      scores: [0, 4, 0],
      sum: 0
    },
    {
      id: "q3",
      options: ["q3_1", "q3_2"],
      scores: [0, 4],
      sum: 0
    },
    {
        id: "q4",
        options: ["q4_1", "q4_2", "q4_3"],
        scores: [4, 0, 0],
        sum: 0
      },
      {
        id: "q5",
        options: ["q5_1", "q5_2"],
        scores: [4, 0],
        sum: 0
      },
      {
        id: "q6",
        options: ["q6_1", "q6_2", "q6_3", "q6_4"],
        scores: [0, 4, 0,0],
        sum: 0
      },
      {
        id: "q7",
        options: ["q7_1", "q7_2", "q7_3", "q7_4"],
        scores: [0, 4, 0, 0],
        sum: 0
      },
      {
        id: "q8",
        options: ["q8_1", "q8_2", "q8_3"],
        scores: [4, 0, 0],
        sum: 0
      },
      {
        id: "q9",
        options: ["q9_1", "q9_2", "q9_3"],
        scores: [0, 4, 0],
        sum: 0
      },
      {
        id: "q10",
        options: ["q10_1", "q10_2", "q10_3", "q10_4"],
        scores: [0, 4, 0, 0],
        sum: 0
      },
      {
        id: "q11",
        options: ["q11_1", "q11_2", "q11_3"],
        scores: [4, 0, 0],
        sum: 0
      },
      {
        id: "q12",
        options: ["q12_1", "q12_2", "q12_3"],
        scores: [0, 0, 4],
        sum: 0
      },
      {
        id: "q13",
        options: ["q13_1", "q13_2", "q13_3"],
        scores: [0, 4, 0],
        sum: 0
      },
      {
        id: "q14",
        options: ["q14_1", "q14_2", "q14_3"],
        scores: [4, 0, 0],
        sum: 0
      },
      {
        id: "q15",
        options: ["q15_1", "q15_2", "q15_3"],
        scores: [0, 4, 0],
        sum: 0
      },
      {
        id: "q16",
        options: ["q16_1", "q16_2", "q16_3", "q16_4"],
        scores: [0, 0, 0, 4],
        sum: 0
      },
      {
        id: "q17",
        options: ["q17_1", "q17_2", "q17_3", "q17_4"],
        scores: [4, 0, 0, 0],
        sum: 0
      },
      {
        id: "q18",
        options: ["q18_1", "q18_2"],
        scores: [0, 4],
        sum: 0
      },
      {
        id: "q19",
        options: ["q19_1", "q19_2"],
        scores: [4, 0],
        sum: 0
      },
      {
        id: "q20",
        options: ["q20_1", "q20_2", "q20_3"],
        scores: [0, 0, 4],
        sum: 0
      },
      {
        id: "q21",
        options: ["q21_1", "q21_2", "q21_3"],
        scores: [0, 4, 0],
        sum: 0
      },
      {
        id: "q22",
        options: ["q22_1", "q22_2", "q22_3"],
        scores: [0, 0, 4],
        sum: 0
      },
      {
        id: "q23",
        options: ["q23_1", "q23_2", "q23_3" , "q23_4"],
        scores: [4, 0, 0, 0],
        sum: 0
      },
      {
        id: "q24",
        options: ["q24_1", "q24_2", "q24_3"],
        scores: [0, 4, 0],
        sum: 0
      },
      {
        id: "q25",
        options: ["q25_1", "q25_2"],
        scores: [4, 0],
        sum: 0
      },
      {
        id: "q26",
        options: ["q26_1", "q26_2", "q26_3", "q26_4"],
        scores: [4, 0, 0, 0],
        sum: 0
      },
      {
        id: "q27",
        options: ["q27_1", "q27_2", "q27_3", "q27_4"],
        scores: [0, 0, 4, 0],
        sum: 0
      },
      {
        id: "q28",
        options: ["q28_1", "q28_2"],
        scores: [ 4, 0],
        sum: 0
      },
      {
        id: "q29",
        options: ["q29_1", "q29_2", "q29_3", "q29_4"],
        scores: [0, 0, 4, 0],
        sum: 0
      },
      {
        id: "q30",
        options: ["q30_1", "q30_2", "q30_3", "q30_4"],
        scores: [0, 4, 0, 0],
        sum: 0
      },
    // add more questions here
  ];
  questions.forEach((question) => {
    const options = question.options.map((option) => document.getElementById(option));
    options.forEach((option) => {
      option.addEventListener("click", () => {
        options.forEach((o) => o.checked = false); // uncheck all other options
        option.checked = true; // check the clicked option
      });
    });
  });

  btnsubmit.addEventListener("click", fnSubmit);
  function fnSubmit(){
    if(fullname.value === "" || gender.value === "" || classx.value === "" || dob.value === ""){
        rs.innerHTML = "Please Check all of your information!";
        rs.style.color = "red";
        validateForm();
        scrollToTop();
    }
    else{
      document.querySelector('.question.result').style.display = 'block';
      document.querySelector('.information').style.display = 'none';
      scrollToTop();
      let sum = 0;
      questions.forEach((question) => {
        question.sum = 0; // reset the sum for this question
        const options = question.options.map((option) => document.getElementById(option));
        options.forEach((option, index) => {
          option.disabled = true;
          if (option.checked) {
            question.sum += question.scores[index]; // add the score for the checked option
          }
        });
        sum += question.sum; // add the sum for this question to the overall sum
      });

      var d = new Date();
      var time = d.toLocaleTimeString();

      var gpa = sum * 4/120;

    //rs.style.color = "black";
    rsTwo.innerHTML = "Thank You!<br>" + fullname.value 
    +"<br>Date of birth :" + dob.value
    + "<br> Class :"+ classx.value +
    "<br> submit time:" + time +
    "<br>Total Score: " + sum + "/120" + "<br> GPA :" + gpa;
    //rsTwo.innerHTML = rs.innerHTML;
    //event.preventDefault(); // Prevent the form from submitting
    // var inputs = document.getElementsByTagName("input"); // Get all input elements
    // var selects = document.getElementsByTagName("select"); // Get all select elements
    // for (var i = 0; i < inputs.length; i++) {
    //   inputs[i].disabled = true; // Disable each input element
    // }
    // for (var i = 0; i < selects.length; i++) {
    //   selects[i].disabled = true; // Disable each select element
    // }
    
    btnsubmit.disabled = true;
    q1_1.style.borderColor= "green";
    if(q1_3.checked){
        q1_3.style.borderColor = "red";   
    }
    if(q1_2.checked){
        q1_2.style.borderColor = "red";
    } 
    /*2*/
    q2_2.style.borderColor= "green";
    if(q2_1.checked){
        q2_1.style.borderColor= "red";
    }    
    if(q2_3.checked){
        q2_3.style.borderColor= "red";
    } 
    /*3*/
    q3_2.style.borderColor= "green";
    if(q3_1.checked){
        q3_1.style.borderColor= "red";  
    }    
    /*4*/
    q4_1.style.borderColor= "green";
    if(q4_3.checked){
        q4_3.style.borderColor = "red";
    }
    if(q4_2.checked){
        q4_2.style.borderColor = "red";
    } 
    /*5*/
    q5_1.style.borderColor= "green";   
    if(q5_2.checked){
        q5_2.style.borderColor = "red";
    }
    /*6*/
    q6_2.style.borderColor = "green";
    if(q6_1.checked){
        q6_1.style.borderColor= "red";
    }    
    if(q6_3.checked){
        q6_3.style.borderColor ="red";
    }
    if(q6_4.checked){
        q6_4.style.borderColor ="red";
    }
/*7*/
q7_2.style.borderColor = "green";
if(q7_1.checked){
    q7_1.style.borderColor= "red";
}    
if(q7_3.checked){
    q7_3.style.borderColor="red";
}
if(q7_4.checked){
    q7_4.style.borderColor= "red";
}
/*8*/
q8_1.style.borderColor="green";
if(q8_2.checked){
    q8_2.style.borderColor="red";
}
if(q8_3.checked){
    q8_3.style.borderColor="red";
}

/*9*/
q9_2.style.borderColor="green";
if(q9_1.checked){
    q9_1.style.borderColor="red";
}
if(q9_3.checked){
    q9_3.style.borderColor="red";
}
    /*10*/
    q10_2.style.borderColor = "green";
    if(q10_1.checked){
        q10_1.style.borderColor= "red";
    }    
    if(q10_2.checked){
        
    }
    if(q10_3.checked){
        q10_3.style.borderColor= "red";
    }
    if(q10_4.checked){
        q10_4.style.borderColor= "red";
    }
    /*11*/
    q11_1.style.borderColor = "green";  
    if(q11_2.checked){
        q11_2.style.borderColor = "red";
    }
    if(q11_3.checked){
        q11_3.style.borderColor= "red";
    }
      /*12*/
      q12_3.style.borderColor = "green";   
    if(q12_2.checked){
        q12_2.style.borderColor = "red";
    }
    if(q12_1.checked){
        q12_3.style.borderColor= "red";
    }
     /*13*/
     q13_2.style.borderColor = "green";   
    if(q13_1.checked){
        q13_1.style.borderColor = "red";
    }
    if(q13_3.checked){
        q13_3.style.borderColor= "red";
    }
     /*14*/
     q14_1.style.borderColor = "green";   
    if(q14_2.checked){
        q14_2.style.borderColor = "red";
    }
    if(q14_3.checked){
        q14_3.style.borderColor= "red";
    }
         /*15*/
     q15_2.style.borderColor = "green";   
    if(q15_1.checked){
        q15_1.style.borderColor = "red";
    }
    if(q15_3.checked){
        q15_3.style.borderColor= "red";
    }
             /*16*/
     q16_4.style.borderColor = "green";   
    if(q16_2.checked){
        q16_2.style.borderColor = "red";
    }
    if(q16_1.checked){
        q16_1.style.borderColor= "red";
    }
    if(q16_3.checked){
      q16_3.style.borderColor= "red";
  }
                 /*17*/
     q17_1.style.borderColor = "green";   
    if(q17_3.checked){
        q17_3.style.borderColor = "red";
    }
    if(q17_2.checked){
        q17_2.style.borderColor= "red";
    }
    if(q17_4.checked){
      q17_4.style.borderColor= "red";
  }
                   /*18*/
     q18_2.style.borderColor = "green";   
    if(q18_1.checked){
        q18_1.style.borderColor = "red";
    }
                       /*19*/
     q19_1.style.borderColor = "green";   
    if(q19_2.checked){
        q19_2.style.borderColor = "red";
    }
                         /*20*/
     q20_3.style.borderColor = "green";   
    if(q20_2.checked){
        q20_2.style.borderColor = "red";
    }
    if(q20_1.checked){
      q20_1.style.borderColor = "red";
  }
                   /*21*/
     q21_2.style.borderColor = "green";   
    if(q21_1.checked){
        q21_1.style.borderColor = "red";
    }
    if(q21_3.checked){
      q21_3.style.borderColor = "red";
  }
                    /*22*/
     q22_3.style.borderColor = "green";   
    if(q22_1.checked){
        q22_1.style.borderColor = "red";
    }
    if(q22_2.checked){
      q22_2.style.borderColor = "red";
  }
                   /*23*/
     q23_1.style.borderColor = "green";   
    if(q23_3.checked){
        q23_3.style.borderColor = "red";
    }
    if(q23_2.checked){
      q23_2.style.borderColor = "red";
    }
    if(q23_4.checked){
      q23_4.style.borderColor = "red";
    }
                    /*24*/
     q24_2.style.borderColor = "green";   
    if(q24_1.checked){
        q24_1.style.borderColor = "red";
    }
    if(q24_3.checked){
      q24_3.style.borderColor = "red";
  }
                   /*25*/
     q25_1.style.borderColor = "green";   
    if(q25_2.checked){
        q25_2.style.borderColor = "red";
    }
              /*26*/
    q26_1.style.borderColor = "green";   
    if(q26_2.checked){
        q26_2.style.borderColor = "red";
    }
    if(q26_3.checked){
      q25_3.style.borderColor = "red";
    }
    if(q26_4.checked){
      q25_4.style.borderColor = "red";
    }
                /*27*/
    q27_3.style.borderColor = "green";   
    if(q27_1.checked){
        q27_1.style.borderColor = "red";
    }
    if(q27_2.checked){
      q27_2.style.borderColor = "red";
    }
    if(q27_4.checked){
      q27_4.style.borderColor = "red";
    }
                 /*28*/
    q28_1.style.borderColor = "green";   
    if(q28_2.checked){
        q28_2.style.borderColor = "red";
    }
                   /*29*/
     q29_3.style.borderColor = "green";   
    if(q29_1.checked){
        q29_1.style.borderColor = "red";
    }
    if(q29_2.checked){
      q29_2.style.borderColor = "red";
    }
    if(q29_4.checked){
      q29_4.style.borderColor = "red";
    }
                   /*30*/
     q30_2.style.borderColor = "green";   
    if(q30_1.checked){
        q30_1.style.borderColor = "red";
    }
    if(q30_3.checked){
      q30_2.style.borderColor = "red";
    }
    if(q30_4.checked){
      q30_4.style.borderColor = "red";
    }
    }

  }
