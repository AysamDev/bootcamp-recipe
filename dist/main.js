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
                renderer.renderIngredients(ref)
                },
            error: function(error)
            {
                alert("Enter an relevant Ingredient, the one you searched was not found")
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
    console.log(firstIngredient)
    alert(firstIngredient.text())
})