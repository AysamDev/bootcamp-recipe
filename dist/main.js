const renderer = new Renderer()

const reqIngredient = function()
{
    let input = $('#input-ingredient').val()
    $('#input-ingredient').val('')
    input = input.toLowerCase()
    if(input != "")
    {
        $.ajax({
            type:"GET",
            url: `/recipes/${input}`,
            success: (ref) => {
                $('#ingredients-container').empty()
                console.log(ref)
                if(ref.length > 0)
                {
                    renderer.renderIngredients(ref)
                }
                else
                {
                    const myerr = $("<div class=err>No result was found,please insert something else.</div>")
                    $('#ingredients-container').append(myerr)
                    alert("Insert an relevant ingredient,the ingredient you looked for does not exist")   
                }
                },
            error: function(error)
            {
                console.log(error)
                
            }
          });
          
    }   
    else
    {
        alert("Insert an relevant ingredient")
    }
}

$('#searchIngredient').on('click',function()
{
    
    reqIngredient()
})

$('#ingredients-container').on('click','.image',function()
{
    const firstIngredient = $(this).siblings('ul').find('li:first')
    console.log(firstIngredient.text())
    alert(firstIngredient.text())
})