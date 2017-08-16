var movesDB = new Object();
movesDB.get = function(dBPath) {

   let def = new $.Deferred()
  ref = firebase.database().ref(dBPath)
      ref.once('value', function(snap) {
        let value = snap.val()
        def.resolve(value);
      }).catch(function(e) {
        console.log('DB GET FAILED: ', e)
        def.reject(e);
      })
  
  return def;
}

movesDB.insert = function(dBObject, dBPath) {
  let def = new $.Deferred()
  let ref = firebase.database().ref(dBPath)
  ref.once('value', snap => {
        snap.ref.update(dBObject)
        def.resolve()
      }).catch(function(e) {
        def.reject(e)
      })
  
  return def;  
}

movesDB.push = function(dBObject, dBPath) {
  let ref = firebase.database().ref(dBPath)
  let key = ref.push(dBObject).key
  return key;
}

function validateEmail(email) {
var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (re.test(email)) {
     if (email.endsWith('@yale.edu')) {
      console.log('Correct email. Nice job.');
      return true;
     }
  }
  
  return false;
}

function addToDB(item) {
   item = item.trim();
   item = item.toLowerCase();
  
  // First, need to check to see what was entered was valid.
  if (validateEmail(item)) {
 let dBPath = 'website/panlist/';
  // Next, check to see if email is already in the database.
  emailExistsInDB(item, dBPath).then(function(alreadyExists) {
    if (alreadyExists) { // if the email already exists
      displayNotice('Looks like this email is already in the panlist.', '#fff')
    } else { // if not!
      displayNotice('Lit. Thanks for your interest!', '#fff')
      movesDB.push({email: item}, dBPath); 
      sendGreetingEmail(item, "Here we go!");
      $('#emailField').val("")
    }
  })
  } else if (item.trim() == "") {
    displayNotice('Well you need to enter your email first, silly.', '#fff')
  } else {
    displayNotice('Please enter a valid <b>@yale.edu</b> email!', '#ff5656')
  }
 
}

function displayNotice(text, color) {
  let noticeText = $('.notice')[0]
  noticeText.innerHTML = text;
  noticeText.style.color = color;
  $('#submitBtn')[0].disabled = true;
  $('.notice').removeClass('stag').velocity('transition.bounceIn');
  setTimeout(function() {
    $('.notice').velocity({scale : 0, opacity: 0}, {duration : 800, easing: 'easeInBack'}).velocity({scale: 1}).addClass('stag');
    $('#submitBtn')[0].disabled = false;
  }, 3000)

}

function emailExistsInDB(item, dBPath) {
  let def = new $.Deferred();
  
  let ref = firebase.database().ref(dBPath)
  ref.orderByChild('email').equalTo(item).once("value", function(snapshot) {
    if (!snapshot.val()) {
      def.resolve(false);
    } else {
      def.resolve(true);
    }   
  })
  
  return def;
}

 function sendTestEmail() {
    movesDB.get('website/panlist').then(function(result) {
      for (var prop in result) {
        let email = result[prop].email;
        console.log(email);
      }
       emailjs.send("zoho", "panlist_message", {"to_email": "christopher.v.moore@yale.edu", "subject":"Hey there! Moves Test Panlist!"}).then(function(result) {alert("Sent!")}).catch(function(e) {alert(e)})
    })
  }

function sendGreetingEmail(email, subject) {
  emailjs.send("zoho", "panlist_message", {"to_email":email, "subject":subject, "content":"So glad you're interested in Moves! We'll be sure to keep you updated on how development is going (we're almost done!) and you'll definitely be the first to hear about the release later this August. It's lit."})
}

function introducePage() {
 // $('.whiteFade').velocity('transition.fadeOut', {duration: 3000})
  setTimeout(function() {
    $('.logo').removeClass('stag').velocity('transition.flipXIn', {duration: 2000, ease: 'easeOutSine'})
  }, 1000)
   setTimeout(function() {
    $('.mini-title').removeClass('stag').velocity('transition.bounceIn')
    $('#emailField').removeClass('stag').velocity('transition.fadeIn')
  }, 1500)
   setTimeout(function() {
    $('#submitBtn').removeClass('stag').velocity('transition.fadeIn')
  }, 1700)
   setTimeout(function() {
    $('#androidBadge').removeClass('stag').velocity('transition.bounceIn')
  }, 2600)
   setTimeout(function() {
    $('#iosBadge').removeClass('stag').velocity('transition.bounceIn')
  }, 2900)
   
}

function showProgressBar() {
 var bar = new ProgressBar.SemiCircle(container, {
  strokeWidth: 18,
  easing: 'easeInOut',
  duration: 1000,
  color: '#FFFFFF',
  svgStyle: null
}); 
  bar.animate(0.0)
  
  $('input').keyup(function(){
  var inputStr = $(this).val()
  var inputLength = inputStr.length;
  var func = function(x) {
    return (Math.pow(x, 1.4)-x)/Math.pow(x, 1.4)
  }
  
  if (validateEmail(inputStr)) {
     bar.animate(1.0)
  } else {
    bar.animate(func(inputLength))
  }
});
}

$( document ).ready(function() {
  introducePage();
  showProgressBar();
});

