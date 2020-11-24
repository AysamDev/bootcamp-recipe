class Renderer
{
    constructor()
    {
        this.template = $('#ingredient-template').html()
        this.templateScript = Handlebars.compile(this.template)
    }

    renderIngredients(data)
    {
        $('#ingredients-container').empty()
        const html =  this.templateScript({data})
        $('#ingredients-container').append(html)
    }
}