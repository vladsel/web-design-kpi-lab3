<template>
    <div id="ProfileView">
        <div class="container">
            <h2 class="title text-center text-primary" style="font-size: 2.25em;"><br><i>My Profile </i>
                <img src="../../img/profile.png" style="width: 65px" class="d-inline-block align-content-center"></h2><br>
            <table class="table table-bordered border-top border-bottom border-start border-end border-2 border-info link-info mt-4">
                <caption class="text-secondary" style="font-size: 1.05em;" id="profile-table">Profile list</caption>
                <thead class="border-info text-black text-center" style="font-size: 1.0em;">
                    <tr>
                        <th width="10%" scope="col" class="bg-info bg-opacity-50 border-2">№</th>
                        <th scope="col" class="bg-info bg-opacity-50 border-2">1</th>
                        <!-- <th scope="col" class="bg-info bg-opacity-50 border-2">2</th> -->
                    </tr>
                </thead>
                <tbody style="font-size: 1.0em;">
                    <tr class="text-dark text-center">
                        <th scope="col" class="bg-info bg-opacity-25 pt-3">First name</th>
                        <td class="pt-3" id="profile-date" v-if="$store.state.logined === true">{{$store.state.firstName}}</td>
                        <td class="pt-3" id="profile-date" v-else>unknown first name</td>
                        <!-- <td>Mark</td> -->
                    </tr>
                    <tr class="text-dark text-center">
                        <th scope="col" class="bg-info bg-opacity-25 pt-3">Last name</th>
                        <td class="pt-3" id="profile-date" v-if="$store.state.logined === true">{{$store.state.lastName}}</td>
                        <td class="pt-3" id="profile-date" v-else>unknown last name</td>
                        <!-- <td>Thompson</td> -->
                    </tr>
                    <tr class="text-dark text-center">
                        <th scope="col" class="bg-info bg-opacity-25 pt-3">Email</th>
                        <td class="pt-3" id="profile-date" v-if="$store.state.logined === true">{{$store.state.email}}</td>
                        <td class="pt-3" id="profile-date" v-else>unknown email</td>
                        <!-- <td>markson@gmail.com</td> -->
                    </tr>
                    <tr class="text-dark text-center">
                        <th scope="col" class="bg-info bg-opacity-25 pt-3">Gender</th>
                        <td class="pt-3" id="profile-date" v-if="$store.state.logined === true">{{$store.state.sex}}</td>
                        <td class="pt-3" id="profile-date" v-else>unknown sex</td>
                        <!-- <td>Male</td> -->
                    </tr>
                    <tr class="text-dark text-center">
                        <th scope="col" class="bg-info bg-opacity-25 pt-3">Birthday</th>
                        <td class="pt-3" id="profile-date" v-if="$store.state.logined === true">{{$store.state.date}}</td>
                        <td class="pt-3" id="profile-date" v-else>unknown date</td>
                        <!-- <td>14.05.1999</td> -->
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
//   import start from '@/script/start'

    export default {
        name: 'ProfileView',
        components: {
            // start
        },
        methods: {
        }
    }
</script>
