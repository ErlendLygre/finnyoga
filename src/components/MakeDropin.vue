<template>
    <div class="background-div">
        <div class ="main-div">
            <header>
                <img src="../assets/logo_stripped.png">
            </header>
            <div class="form-container">
            <h3>Her kan du opprette en yogatime som kundene kan se. Fyll inn informasjon om timen din nedenfor!</h3>
            <v-form v-model="valid" class="form">
                <v-text-field
                    v-model="dropin.studioName"
                    label="Studionavn"
                    hint="Navnet på studioet ditt!"
                ></v-text-field>
                <v-text-field
                    v-model="dropin.yogaType"
                    label="Type yoga"
                    hint="F.eks Yin eller Bikram"
                ></v-text-field>
                <v-text-field
                    v-model="dropin.studioSuburb"
                    label="Bydel"
                    hint="F.eks Torshov eller Sagene"
                ></v-text-field>
                <v-text-field
                    v-model="dropin.price"
                    label="Pris"
                    hint="F.eks 299"
                ></v-text-field>
                <v-text-field
                    v-model="dropin.capacity"
                    label="Hvor mange er det plass til?"
                    hint="F.eks 8"
                ></v-text-field>
                <v-textarea
                    outline
                    v-model="dropin.description"
                    label="Studiobeskrivelse"
                    hint="Skriv litt om studioet ditt!"
                ></v-textarea>
                <v-select
                    :items="difficulty"
                    v-model="dropin.difficulty"
                    label="Vanskelighetsgrad"
                    hint="Hvem passer timen din for?"
                ></v-select>

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
                <v-select
                    :items="clockElements"
                    v-model="dropin.time"
                    label="Klokkeslett"
                    hint="Hvor lang er timen din?"
                ></v-select>
            </v-form>
            </div>
            <v-btn class="yoga-btn" @click="pushToFirebase" large color="success" round>Opprett time</v-btn>
        </div>
    </div>        
</template>




<script>
export default {
    props: {
        dropin: Object,
        db: Object
    },
    data: () => ({
        menu1: false,
        valid: true,
        rules: {
            
        },
        difficulty: [
            "Nybegynnere",
            "Litt erfarne", 
            "Erfarne"
        ],
        clockElements: [
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
        ]
    }),
    methods: {
        pushToFirebase() {
            this.db.collection('dropins').doc().set(this.dropin)
            this.$router.replace('dropins')
        }
    }
}
</script>


<style type="text/css">
header {
    margin: 30px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-container {
    background-color: #F5F5F5;
    padding: 20px;
    margin-top: 20px;
    box-shadow: 12px 16px 44px  rgba(0,0,0,0.10);
    opacity: 0.9;
    border-radius: 30px;
}

.background-div {
    width: 100%;
    height: 100%; 
    background-color: red;
    background: url("../assets/yogastudio2.jpg") no-repeat center; 
    background-size: cover;
}


</style>

