var es = new EventSource('/stream');
es.onmessage = function (e) {
  console.log(e)
  var data = $.parseJSON(event.data)
  var now  = new Date
  $('<div class="card mb-3" style="max-width: 540px;"> \
       <div class="row no-gutters"> \
         <div class="col-md-4 align-self-center"> \
           <img src="/images/' + data.persona + '.jpg" class="card-img" alt="Headshot"> \
         </div> \
         <div class="col-md-8"><div class="card-body"> \
           <p class="card-text">' + data.message + '</p> \
         </div> \
       </div> \
     </div> \
       <div class="card-footer text-muted">' + now.toLocaleString() + '</div> \
     </div>').prependTo('#cards').hide().fadeIn('slow')
};