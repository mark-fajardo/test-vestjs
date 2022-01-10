<template>
    <div>
        <input type="checkbox" id="test_only" name="test_only" v-model="test_only">
        <label for="test_only"> {{ (test_only === true) ? 'True' : 'False' }}</label><br><br>
        <button @click="validate">Run Suite Test</button>
    </div>
</template>

<script>
    import { TestSuite } from '../validations/test.validation';

    export default {
        name: 'App',
        data() {
            return {
                test_only: false
            }
        },
        methods: {
            async validate() {
                let oSuite = await TestSuite({
                    test_only: this.test_only,
                });
                await this.showFirstMessageFromSuite(oSuite);
            },

            async showFirstMessageFromSuite(oSuite) {
                let errors = await oSuite.getErrors();
                if (await oSuite.hasErrors() === true) {
                    alert(errors[Object.keys(errors)[0]][0]);
                }
            },
        }
    }
</script>
