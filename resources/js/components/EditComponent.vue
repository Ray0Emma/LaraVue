<template>
    <div class="container-lg">
        <div class="row justify-content-center mt-5">
            <div class="col-6 text-center mt-4">
                <div
                    class="alert alert-danger"
                    role="alert"
                    v-if="errors.length > 0"
                >
                    <li v-for="error in errors" :key="error">
                        {{ error }}
                        <br />
                    </li>
                </div>
                <div v-if="msg !== ''">
                    <p class="alert alert-success" role="alert">{{ msg }}</p>
                </div>
                <h1>Update User</h1>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-6">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="user.name"
                                />
                            </div>
                            <div class="form-group mt-3">
                                <label>Email</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="user.email"
                                />
                            </div>
                            <div class="form-group mt-3">
                                <label>Password</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    v-model="user.password"
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        class="btn btn-dark px-4 mt-3"
                        @click="formValidator()"
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            errors: [],
            user: [],
            msg: "",
        };
    },
    methods: {
        formValidator() {
            if (!this.user.name) {
                this.errors.push(" Name required");
            }
            if (!this.user.email) {
                this.errors.push("Email required");
            }
            if (!this.user.password) {
                this.errors.push("Password required");
            }
            if (this.user.name && this.user.email && this.user.password) {
                return this.putUser();
            }
        },
        putUser() {
            return axios
                .patch(
                    `http://localhost:8000/api/users/${this.$route.params.id}`,
                    this.user
                )
                .then((resp) => {
                    this.$router.push({ name: "users" });
                    console.log(resp.data);
                    this.msg = resp.data;
                })
                .catch((err) => console.log(err));
        },
    },
    computed: {
        user() {
            let user = {
                name: this.$route.params.name,
                email: this.$route.params.email,
                password: this.$route.params.password,
            };
            return user;
        },
    },
};
</script>

<style scoped></style>
