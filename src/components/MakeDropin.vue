<template>
    <div class ="formDiv">
        <v-form v-model="valid" class="form">
            <v-text-field
                v-model="dropin.studioName"
                label="Studionavn"
                hint="Navnet på studioet ditt!"
                ></v-text-field>
        </v-form>
        <v-form v-model="valid" class="form">
            <v-textarea
                outline
                v-model="dropin.description"
                label="Studiobeskrivelse"
                hint="Skriv litt om studioet ditt!"
                ></v-textarea>
        </v-form>
        <v-form v-model="valid" class="form">
            <v-select
                :items="difficulty"
                v-model="dropin.difficulty"
                label="Vanskelighetsgrad"
                hint="Hvem passer timen din for?"
                ></v-select>
        </v-form>
        <v-menu
          v-model="menu1"
          :close-on-content-click="false"
          full-width
          max-width="290"
        >
          <v-text-field
            slot="activator"
            :value="dropin.date"
            clearable
            label="Dato"
            readonly
          ></v-text-field>
          <v-date-picker
            v-model="dropin.date"
            @change="menu1 = false"
          ></v-date-picker>
        </v-menu>
        <v-form v-model="valid" class="form">
            <v-select
                :items="clockElements"
                v-model="dropin.time"
                label="Klokkeslett"
                hint="Hvor lang og kjedelig er timen din?"
                ></v-select>
        </v-form>
        {{dropin}}
    </div>        
</template>




<script>
export default {
    props: {
        dropin: Object
    },
    data: () => ({
        menu1: false,
        valid: true,
        rules: {
            
        },
        difficulty: ["Nybegynnere","Litt erfarne", "Erfarne"],
        clockElements: ["07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00",]

    })
}
</script>


<style type="text/css">

.formDiv {

    width: 50%;
    margin: 0 auto;
}

</style>

