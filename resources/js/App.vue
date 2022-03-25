<template>
    <div>
        <!-- Start Navbar -->
        <nav
            class="navbar navbar-expand-md navbar-white navbar-top p-3 shadow-sm"
        >
            <div class="container-lg">
                <router-link class="navbar-brand fs-5 fw-bold" to="/">
                    <img
                        :class="{ shake: noActivated }"
                        src="assets/logo.png"
                        alt="Purple Letter F inside polygon"
                        width="43"
                        height="43"
                        class="brand-text"
                        @mouseleave="noActivated = !noActivated"
                    />
                    <span class="fs-6">Hi again VueJS!</span>
                </router-link>
                <button
                    class="d-lg-none d-md-none bg-white"
                    style="border-color: rgba(102, 172, 204, 0)"
                    data-bs-toggle="collapse"
                    data-bs-target="#toggelMobileMenu"
                    aria-controls="toggelMobileMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="toggelMobileMenu">
                    <hr />
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item me-3">
                            <router-link to="/create">Add User</router-link>
                        </li>
                        <li class="nav-item me-3">
                            <router-link to="/">All User</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- End Navbar -->
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            noActivated: false,
        };
    },
    name: "Navbar",
};
</script>

<style>
h1 {
    color: #cb57cb;
}
nav.navbar {
    margin-bottom: 34px;
    background-color: #ffff;
}
nav.navbar a span {
    font-weight: bold;
    color: #2c3e50;
}
li.nav-item a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    margin-right: 12px;
}
li.nav-item a.router-link-active {
    color: #cb57cb;
}
.shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
}
@keyframes shake {
    10%,
    90% {
        transform: translate3d(-1px, 0, 0);
    }
    20%,
    80% {
        transform: translate3d(2px, 0, 0);
    }
    30%,
    50%,
    70% {
        transform: translate3d(-4px, 0, 0);
    }
    40%,
    60% {
        transform: translate3d(4px, 0, 0);
    }
}
</style>
