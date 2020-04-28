$(document).ready(function () {
  var data = {
    screenerName: "",
    screeneeName: "",
    screeneeAge: "",
    email: "",

    currentQuestion: 1,
    currentPoint: 0,
    currentSection: 1,

    drawing: "",
    progress: false,
  };

  var checkList = [
    {
      question: "Only number 1-12 are present",
      point: 1,
    },
    {
      question: "Only Arabic number are used",
      point: 1,
    },
    {
      question: "Number are in correct order",
      point: 1,
    },
    {
      question: "Number are draw without rotating the device",
      point: 1,
    },
    {
      question: "Number are in correct position",
      point: 1,
    },
    {
      question: "Number are all inside circle",
      point: 1,
    },
    {
      question: "Two hand are present",
      point: 1,
    },
    {
      question: "Two hand are in correct position",
      point: 1,
    },
    {
      question: "There are no meaningless marking",
      point: 1,
    },
    {
      question: "The two hand are joined togehter",
      point: 1,
    },
    {
      question: "A center is present",
      point: 1,
    },
  ];

  function nextSection() {
    $(`#section-${data.currentSection}`).hide();
    data.currentSection += 1;
    $(`#section-${data.currentSection}`).show();
  }

  // Section 1
  $("#start-now-btn").on("click", function () {
    data.progress = true;
    nextSection();
  });

  // Section 2
  $("#info-done-btn").on("click", function () {
    var form = $("#info-form")[0];
    form.classList.add("was-validated");
    var valid = form.checkValidity();
    if (valid) {
      nextSection();
    }
    $("form")
      .serializeArray()
      .forEach(function (field) {
        data[field.name] = field.value;
      });
  });

  // Section 3
  var container = $("#artboard-container")[0];
  var cfd = new CanvasFreeDrawing.default({
    elementId: "artboard",
    width: container.offsetWidth,
    height: container.offsetHeight,
  });

  cfd.setLineWidth(5);
  cfd.setStrokeColor([0, 0, 0]);

  $("#artboard-undo-btn").on("click", function () {
    cfd.undo();
  });
  $("#artboard-reset-btn").on("click", function () {
    cfd.clear();
  });
  $("#artboard-done-btn").on("click", function () {
    $("#assess-image")[0].src = data.drawing = $("#artboard")[0].toDataURL(
      "image/png"
    );
    nextSection();
  });

  // Section 4
  function completeTest() {
    nextSection();
    $("#result-score").html(data.currentPoint);
    var resultText = "";
    if (data.currentPoint <= 7) {
      resultText =
        "The screenee has dementia condition, we suggest you consult the expert on this issue";
    } else if (data.currentPoint > 7 && data.currentPoint <= 9) {
      resultText = "The screenee might experience some dementia condition";
    } else {
      resultText = "The screenee has no dementia condition ";
    }
    $("#result-text").html(resultText);
    $("#result-image")[0].src = data.drawing;
    emailjs.send("gmail", "test_result", {
      screeneeName: data.screeneeName,
      screenerName: data.screenerName,
      screeneeAge: data.screeneeAge,
      email: data.email,
      drawingHtml: `<img src="${data.drawing}"/>`,
      point: data.currentPoint,
      result: resultText,
    });
    data.progress = false;
  }

  function loadQuestion(index) {
    if (index === checkList.length) {
      completeTest();
    } else {
      data.currentQuestion = index;
      var curr = checkList[index];
      var question = `<small>Question ${index + 1} of ${
        checkList.length
      }:</small><h6>${curr.question}</h6>`;
      $("#assess-question").html(question);
    }
  }
  $("#assess-yes-btn").on("click", function () {
    data.currentPoint += checkList[data.currentQuestion].point;
    loadQuestion(data.currentQuestion + 1);
  });

  $("#assess-no-btn").on("click", function () {
    loadQuestion(data.currentQuestion + 1);
  });

  // Section 5
  $("#result-done-btn").on("click", function () {
    window.location.reload();
  });

  // Initialize
  emailjs.init("user_ephfpBXT56FDLLPvtfTYK");
  loadQuestion(0);
  $("#section-2").hide();
  $("#section-3").hide();
  $("#section-4").hide();
  $("#section-5").hide();
  window.addEventListener("beforeunload", function (e) {
    if (data.progress) {
      e.preventDefault();
      e.returnValue = "";
    } else {
      delete e["returnValue"];
    }
  });
});
