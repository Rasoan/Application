/* скрипт для селекта выбора специальности */
$('.enrolleForm__hiddenSpecialty-JS').each(function () {
  var $this = $(this),
    numberOfOptions = $(this).children('option').length;
  $this.after('<div class="enrolleForm__selectedSpecialty"></div>'); // в после селекта вставить это 
  var $styledSelect = $this.next('div.enrolleForm__selectedSpecialty');
  $styledSelect.text($this.children('option').eq(0).text());
  var $list = $('<ul />', {
    'class': 'enrolleForm__visibleSpecialty'
  }).insertAfter($styledSelect);
  for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val()
    }).appendTo($list);
  }
  var $listItems = $list.children('li');
  $styledSelect.click(function (e) {
    e.stopPropagation();
    $('div.enrolleForm__selectedSpecialty.enrolleForm__selectedArrov').not(this).each(function () {
      $(this).removeClass('enrolleForm__selectedArrov').next('ul.enrolleForm__visibleSpecialty').hide();
    });
    $(this).toggleClass('enrolleForm__selectedArrov').next('ul.enrolleForm__visibleSpecialty').toggle();
  });
  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass('enrolleForm__selectedArrov');
    $this.val($(this).attr('rel'));
    $list.hide();
    //console.log($this.val());
  });
  $(document).click(function () {
    $styledSelect.removeClass('enrolleForm__selectedArrov');
    $list.hide();
  });
});


$('#bootstrapForm').submit(function (event) {
  event.preventDefault()
  let extraData = {}
  $('#bootstrapForm').ajaxSubmit({
    data: extraData,
    dataType: 'jsonp', // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
    error: function () {
      // Submit of form should be successful but JSONP callback will fail because Google Forms
      // does not support it, so this is handled as a failure.

      // You can also redirect the user to a custom thank-you page:
      let select = document.getElementById("1890561908");
      let value = select.options[select.selectedIndex].value;

      let form = document.querySelector('.formContainer_display_flex');
      let thankyou = document.querySelector('.thankyou');
      let speciality = document.querySelector('.enrolleForm__hiddenSpecialty-JS').value;
      form.style.display = "none";
      thankyou.style.display = "block"

      let for1m = document.querySelector('form');
      let newArr = [];
      let formArr = for1m.querySelectorAll('.form__input').forEach(el => newArr.push(el.value));
      let datestart = document.querySelector('.thankyou__date');


      if (speciality === "Начальное образование") {
        datestart.innerText = "06.04.2020"
      }

      if (speciality === "Математика") {
        datestart.innerText = "06.04.2020"
      }

      if (speciality === "Физкультурно-оздоровительная работа в учреждениях образования") {
        datestart.innerText = "20.04.2020"
      }

      if (speciality === "Педагогическая деятельность специалистов") {
        datestart.innerText = "20.04.2020"
      }

      if (speciality === "Иностранный язык") {
        datestart.innerText = "27.04.2020"
      }

      if (speciality === "Информатика") {
        datestart.innerText = "04.05.2020"
      }

      if (speciality === "Практическая психология") {
        datestart.innerText = "18.05.2020"
      }

      if (speciality === "Логопедия") {
        datestart.innerText = "25.05.2020"
      }

      if (speciality === "Психология семейных отношений") {
        datestart.innerText = "25.05.2020"
      }

      if (speciality === "Психология") {
        datestart.innerText = "01.06.2020"
      }

      if (speciality === "Психология управления") {
        datestart.innerText = "08.06.2020"
      }

      if (speciality === "Дошкольное образование") {
        datestart.innerText = "05.10.2020"
      }

      if (speciality === "Интегрированное обучение и воспитание в школьном образовании") {
        datestart.innerText = "07.12.2020"
      }

      if (speciality === "Жестовый язык") {
        datestart.innerText = "03.01.2022"
      }

      if (speciality === "Олигофренопедагогика") {
        datestart.innerText = "03.01.2022"
      }

      if (speciality === "Сурдопедагогика") {
        datestart.innerText = "03.01.2022"
      }

      if (speciality === "Тифлопедагогика") {
        datestart.innerText = "03.01.2022"
      }






      document.querySelector('.thankyou__name').innerText = `${newArr[1]}`
      document.querySelector('.thankyou__speciality').innerText = `${speciality}`
      document.querySelector('.thankyou__name--example').innerText = `${newArr[1]}`
      document.querySelector('.thankyou__speciality--example').innerText = `${speciality}`
      document.querySelector('.thankyou__mail').innerText = `${newArr[0]}`
      document.querySelector('.thankyou__phone').innerText = `${newArr[2]}`
      document.querySelector('.thankyou__vuz').innerText = `${newArr[3]}`
      document.querySelector('.thankyou__current-speciality').innerText = `${newArr[4]}`
      document.querySelector('.thankyou__current-kvalification').innerText = `${newArr[5]}`
    }
  })
})