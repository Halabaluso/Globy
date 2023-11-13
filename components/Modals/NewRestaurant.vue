<template>
    <dialog id="modal_restaurant" class="modal">
        <div class="modal-box">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <form method="dialog">
                <h3 class="font-bold text-lg"><Icon name = "ph:plus-circle-bold"></Icon> New restaurant</h3>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Restaurant Name</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Restaurant Subname</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Type of food</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Restaurant address</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Resutaurant open</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <div class="form-control w-full my-2">
                    <label class="label">
                        <span class="label-text">Restaurant close</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <button class="btn btn-primary mt-5"><Icon name = "ph:plus-circle-bold"></Icon> Create restaurant</button>
            </form>
        </div>
    </dialog>
</template>

<script setup>

</script>

<style></style>