let allStudents = {
    jordan: {
      name: "Jordan",
      grade: "",
      missingAssignments: "",
    },
    kyle: {
      name: "Kyle",
      grade: "",
      missingAssignments: "",
    },
    maxine: {
      name: "Maxine",
      grade: "",
      missingAssignments: "",
    },
    kadesha: {
      name: "Kadesha",
      grade: "",
      missingAssignments: "",
    },
  };
  
  let students = ["Jordan", "Kyle", "Maxine", "Kadesha"];
  
  // Dom
  // ->getElementByID
  // append() or prepend()
  // createElement ->Vadim
  // .querySelector
  // innerHTML
  // classList
  let body = document.querySelector("body");
  
  let newParent = document.createElement("div");
  newParent.setAttribute("class", "studentContainer");
  
  // -----------------------------{created Parent}
  
  // -----------------------------{created Name}
  let studentName = document.createElement("div");
  studentName.setAttribute("class", "namer");
  studentName.innerHTML = "";
  // -----------------------------{created Grade}
  let studentGrade = document.createElement("div");
  studentGrade.setAttribute("class", "grader");
  studentGrade.innerHTML = "";
  // -----------------------------{created AAssignment}
  let studentAssign = document.createElement("div");
  studentGrade.setAttribute("class", "assign");
  
  
  
  const generateStudents = () => {
      students.forEach((student) => {
          let newParent = document.createElement("div");
          newParent.setAttribute("class", "studentContainer");
          let studentName = document.createElement("div");
          studentName.setAttribute("class", "namer");
          studentName.innerHTML = `Name: ${student}`;
          let studentGrade = document.createElement("div");
          studentGrade.setAttribute("class", "grader");
          studentGrade.innerHTML = `Grade:   `;
          let studentAssign = document.createElement("div");
          studentGrade.setAttribute("class", "assign");
          studentAssign.innerHTML = `Assignment:   `;
         //--------add a button in the  new divs to allow user to add text to Name Grade and Assignments

          let button = document.createElement('button'); // 'button' is the tag name
           button.setAttribute('type', 'button'); // Setting the type attribute
           button.setAttribute('class', 'inputButton'); // Setting the class attribute
           button.innerHTML='Add student Assignment / Grade'

           button.addEventListener('click', function() {
            let assign = prompt('Enter a assignment:');
            let grade = prompt('Enter a grade:'); // Display prompt and get input

            studentAssign.append(assign)
            studentGrade.append(grade)
        });

           

          
        
        // -------------------------------------------------------------
            newParent.append(studentName)
            newParent.append(studentGrade)
            newParent.append(studentAssign)
            newParent.append(button)
            body.append(newParent)

        

        
           

        
        });
        
  }
  
  