<script setup lang="ts"></script>

<template>
  <div class="modal is-active">
    <div class="modal-background" @click="$emit('close')"></div>

    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add a Workout</p>
        <button class="delete" aria-label="close" @click="$emit('close')"></button>
      </header>

      <section class="modal-card-body">
        <div class="box">
          <h3 class="title is-3">Workout</h3>

          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input class="input" type="text" placeholder="Workout Title" />
            </div>
          </div>

          <div class="field">
            <label class="label">Date</label>
            <div class="control">
              <input class="input" type="date" placeholder="Workout Date" />
            </div>
          </div>

          <div class="field">
            <label class="label">Duration</label>
            <div class="control">
              <input class="input" type="text" placeholder="Duration" />
            </div>
          </div>

          <div class="field">
            <label class="label">Mood</label>
            <div class="control">
              <input class="input" type="text" placeholder="Mood" />
            </div>
          </div>

          <div class="field">
            <label class="label">Type</label>
            <div class="select is-info">
              <select>
                <option>Select Workout</option>
                <option>Run</option>
                <option>Walk</option>
                <option>Yoga</option>
              </select>
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
