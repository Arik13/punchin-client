<template>
    <div>
        <v-list>
            <template v-if="listItems.length != 0">
                <v-list-item
                    v-for="(listItem, index) in listItems"
                    :key="index"
                    :to="{path: pathify(listItem._id)}"
                >
                    <v-list-item-content>
                        <slot></slot>
                    </v-list-item-content>
                </v-list-item>
            </template>
            <v-list-item v-else>
                Add items using the plus button
            </v-list-item>
        </v-list>
        <v-btn fab dark large fixed right bottom @click="routeToForm()">
            <v-icon dark>add</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listItems: [],
        }
    },
    props: ["resourcePath", "formPath"],
    mounted() {
        this.$store.dispatch("accessResource", {
            method: "GET",
            route: this.resourcePath,
            callback: (result) => {
                console.log("Result", result);
                this.listItems = result;
            }
        });
    },
    watch: {
        listItems() {
            console.log("List Items: ", this.listItems);
        }
    },
    methods: {
        pathify(id) {
            return this.resourcePath + "/" + id;
        },
        routeToForm() {
            this.$router.push(this.formPath);
        }
    },
}
</script>