<script setup lang="ts"></script>

<script setup lang="ts"></script>

<template>
  <div class="modal is-active">
    <div class="modal-background" @click="$emit('close')"></div>

    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Sign Up</p>
        <button class="delete" aria-label="close" @click="$emit('close')"></button>
      </header>

      <section class="modal-card-body">
        <div class="box">
          <h3 class="title is-3">Create your account</h3>

          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Name" />
            </div>
          </div>

          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input class="input" type="text" placeholder="Username" />
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" placeholder="Email" />
            </div>
          </div>
        </div>
      </section>

      <footer class="modal-card-foot">
        <button class="button is-success">Submit</button>
        <button class="button" @click="$emit('close')">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<style scoped></style>
