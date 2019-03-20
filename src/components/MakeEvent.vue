<template>
        <div class ="main-div">
            <div class="form-container">
            <h3>Opprett arrangement</h3>
            <v-form v-model="valid" class="form">
                <v-text-field
                    v-model="event.title"
                    label="Navn på arrangement"
                    hint="F.eks brettspillkveld"
                ></v-text-field>
                <v-text-field
                    v-model="event.host"
                    label="Navn på arrangør"
                    hint="F.eks UiO Judoklubb"
                ></v-text-field>
                <v-text-field
                    v-model="event.location"
                    label="Sted"
                    hint="F.eks Blindern"
                ></v-text-field>
                <v-textarea
                    outline
                    v-model="event.description"
                    label="Beskrivelse"
                    hint="Skriv litt om eventet ditt."
                ></v-textarea>

                <v-menu
                    v-model="menu1"
                    :close-on-content-click="false"
                    full-width
                    max-width="290"
                >
                    <v-text-field
                        slot="activator"
                        :value="event.date"
                        clearable
                        label="Dato"
                        readonly
                    ></v-text-field>
                    <v-date-picker
                        v-model="event.date"
                        @change="menu1 = false"
                    ></v-date-picker>
                </v-menu>
                <v-select
                    :items="clockElements"
                    v-model="event.time"
                    label="Klokkeslett"
                    hint="Hvor lang er timen din?"
                ></v-select>
            </v-form>
            </div>
            <v-btn @click="pushToFirebase" large>Opprett time</v-btn>
        </div> 
</template>




<script>
export default {
    props: {
        event: Object,
        db: Object
    },
    data: () => ({
        menu1: false,
        valid: true,
        rules: {
            
        },
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
            this.db.collection('events').doc().set(this.event)
            this.$router.replace('events')
        }
    }
}
</script>


<style type="text/css">
.form-container {
    background-color: #F5F5F5;
    padding: 20px;
    margin-top: 20px;
    box-shadow: 12px 16px 44px  rgba(0,0,0,0.10);
    opacity: 0.9;
}
</style>

