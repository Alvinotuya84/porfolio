$('form.contact-form').on('submit',function(){
    var response="we have recieved ";
    var that=$(this),
        url=that.attr('action'),
        type=that.attr('method'),
        data={};
        that.find('[name]').each(function(index, value){
            
            var that=$(this),
            name=that.attr('name'),
            value= that.val();
            data[name]=value;
        
        });
        
  $.ajax({
      url:url,
      type:type,
      data:data,
      dataType:"json",
      success: (data) => {
          $(".response").text(data.content);


      },
      error:function(data){
        $(".response").text("an error occured");
    }
  });
        return false;
    });
    function ajax_form(selector, obj)
{

    var form = document.querySelectorAll(selector);

    if(obj)
    {

        var before = obj.before ? obj.before : function(){return true;};

        var $success = obj.success ? obj.success: function(){return true;};

        for (var i = 0; i < form.length; i++)
        {

            var url = form[i].hasAttribute('action') ? form[i].getAttribute('action') : window.location;

            var $form = form[i];

            form[i].submit = function()
            {

                var xhttp = new XMLHttpRequest();

                xhttp.open("POST", url, true);

                var FD = new FormData($form);

                /** prevent submiting twice */
                if($form.disable === true)

                    return;

                $form.disable = true;

                if(before() === false)

                    return  false;

                xhttp.addEventListener('load', function()
                {

                    $form.disable = false;

                    return $success(JSON.parse(this.response));

                });

                xhttp.send(FD);

            }
        }
    }

    return form;
}
document.getElemtnByid("")