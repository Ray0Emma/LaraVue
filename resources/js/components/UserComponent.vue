<template>
    <div class="container-lg">
        <div class="row justify-content-center mt-5">
            <div class="col-6 text-center mt-4">
                <h1>All Users</h1>
            </div>

            <div class="col-10 mt-4">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody v-for="usr in users" v-bind:key="usr.id">
                        <tr>
                            <td>{{ usr.id }}</td>
                            <td>{{ usr.name }}</td>
                            <td>{{ usr.email }}</td>
                            <td role="group">
                                <router-link
                                    class="btn btn-dark"
                                    :to="{
                                        name: 'edit',
                                        params: {
                                            id: usr.id,
                                            name: usr.name,
                                            email: usr.email,
                                            password: usr.password,
                                        },
                                    }"
                                    >Edit</router-link
                                >
                                <button
                                    class="btn btn-danger ms-5"
                                    @click="deleteUser(usr.id)"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        deleteUser(id) {
            this.axios
                .delete(`http://localhost:8000/api/users/${id}`)
                .then((res) => {
                    let i = this.users.map((data) => data.id).indexOf(id);
                    console.log(this.users.map((data) => data.id));
                    console.log("id=".id);
                    console.log(i);
                    this.users.splice(i, 1);
                });
        },
    },
    created() {
        this.axios.get("http://localhost:8000/api/users/").then((res) => {
            this.users = res.data;
            console.log(this.users);
        });
    },

    data() {
        return {
            users: [],
        };
    },
};
</script>

<style scoped></style>
