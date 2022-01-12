let input = document.getElementById('search-food');
const key = '8ad1ba22-ee83-fe14-7470-78dc6fb7b0d2:fx';
const nutritionTable = document.getElementById('table');

const calorie = async () => {
    if(input.value === ""){
        alert('Inserisci un cibo da cercare!');
        return;
    }
    
    nutritionTable.style.display = 'flex';

    // Translate food's name in english
    const response = await fetch(`https://api-free.deepl.com/v2/translate?auth_key=${key}&text=${input.value}&target_lang=EN&source_lang=it`);
    const data = await response.json();
    let translated = data.translations.slice(0,1)[0].text;

    // API request for food desiderated
    const respC = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=0723668a&app_key=62d058fb52b3b09f2a7426265302593b&nutrition-type=cooking&ingr=100g%20${translated}`);
    const dataC = await respC.json();
    
    //print the food's name and nutrition value in the nutritional folder
    const name = document.getElementById('food');
    name.innerHTML = input.value;
    document.getElementById('calories').innerHTML= `Calorie: ${dataC.calories} kcal`;
    document.getElementById('carbohydrate').innerHTML = `Carboidrati: ${dataC.totalNutrients.CHOCDF.quantity}${dataC.totalNutrients.CHOCDF.unit}`;
    document.getElementById('fat').innerHTML= `Grassi: ${dataC.totalNutrients.FAT.quantity}${dataC.totalNutrients.FAT.unit}`; 
    document.getElementById('saturated').innerHTML = `di cui saturi: ${dataC.totalNutrients.FASAT.quantity}${dataC.totalNutrients.FASAT.unit}`;
    document.getElementById('monounsaturated').innerHTML = `monoinsaturi: ${dataC.totalNutrients.FAMS.quantity}${dataC.totalNutrients.FAMS.unit}`;
    document.getElementById('polyunsaturated').innerHTML = `polinsaturi: ${dataC.totalNutrients.FAPU.quantity}${dataC.totalNutrients.FAPU.unit}`;
    document.getElementById('protein').innerHTML = `Proteine: ${dataC.totalNutrients.PROCNT.quantity}${dataC.totalNutrients.PROCNT.unit}`;
    document.getElementById('sodium').innerHTML = `Sodio: ${dataC.totalNutrients.NA.quantity}${dataC.totalNutrients.NA.unit}`;
    document.getElementById('calcium').innerHTML = `Calcio: ${dataC.totalNutrients.CA.quantity}${dataC.totalNutrients.CA.unit}`;
    document.getElementById('magnesium').innerHTML = `Magnesio: ${dataC.totalNutrients.MG.quantity}${dataC.totalNutrients.MG.unit}`;
    document.getElementById('potassium').innerHTML = `Potassio: ${dataC.totalNutrients.K.quantity}${dataC.totalNutrients.K.unit}`;
    document.getElementById('iron').innerHTML = `Ferro: ${dataC.totalNutrients.FE.quantity}${dataC.totalNutrients.FE.unit}`;
    document.getElementById('zinc').innerHTML = `Zinco: ${dataC.totalNutrients.ZN.quantity}${dataC.totalNutrients.ZN.unit}`;
    document.getElementById('phosphorus').innerHTML = `Fosforo: ${dataC.totalNutrients.P.quantity}${dataC.totalNutrients.P.unit}`;
    document.getElementById('vitc').innerHTML = `Vitamina C: ${dataC.totalNutrients.VITC.quantity}${dataC.totalNutrients.CHOCDF.unit}`;
    document.getElementById('thiamin').innerHTML = `Tiamina: ${dataC.totalNutrients.THIA.quantity}${dataC.totalNutrients.THIA.unit}`;
    document.getElementById('riboflavin').innerHTML = `Riboflavina: ${dataC.totalNutrients.RIBF.quantity}${dataC.totalNutrients.RIBF.unit}`;
    document.getElementById('niacin').innerHTML = `Niacina: ${dataC.totalNutrients.NIA.quantity}${dataC.totalNutrients.NIA.unit}`;
    document.getElementById('vitb6').innerHTML = `Vitamina B6: ${dataC.totalNutrients.VITB6A.quantity}${dataC.totalNutrients.VITB6A.unit}`;
    document.getElementById('folic-acid').innerHTML = `Acido folico: ${dataC.totalNutrients.FOLAC.quantity}${dataC.totalNutrients.FOLAC.unit}`;
    document.getElementById('vitb12').innerHTML = `Vitamina B12: ${dataC.totalNutrients.VITB12.quantity}${dataC.totalNutrients.VITB12.unit}`;
    document.getElementById('vitd').innerHTML = `Vitamina D: ${dataC.totalNutrients.VITD.quantity}${dataC.totalNutrients.VITD.unit}`;
    document.getElementById('water').innerHTML = `Acqua: ${dataC.totalNutrients.WATER.quantity}${dataC.totalNutrients.WATER.unit}`;
    
    // reset the input value and the translation
    translated = "";
    input.value = "";
}

document.getElementById('button').addEventListener('click', calorie);