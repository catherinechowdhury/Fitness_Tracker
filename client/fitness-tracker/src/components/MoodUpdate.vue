<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <div class="box has-text-centered">
          <h3 class="title is-3">How are you feeling today?</h3>
          <div class="buttons is-centered">
            <button class="button is-warning">😄 Excited</button>
            <button class="button is-success">😊 Happy</button>
            <button class="button is-success">😌 Calm</button>
            <button class="button is-info">😔 Sad</button>
          </div>
          <div class="buttons is-centered">
            <button class="button is-info">😟 Worried</button>
            <button class="button is-warning">😐 Neutral</button>
            <button class="button is-danger">😴 Tired</button>
            <button class="button is-dark">😡 Angry</button>
          </div>
          <h3 class="title is-3">Your Day so Far</h3>
          <div class="field">
            <label class="label is-medium">Select a Date</label>
            <div class="control">
              <input class="input is-medium" type="date" />
            </div>
          </div>

          <article class="media">
            <div class="media-content">
              <div class="field">
                <p class="control">
                  <textarea class="textarea is-medium" placeholder="Add a comment..."></textarea>
                </p>
              </div>
            </div>
          </article>
          <button id="submit" class="button is-primary">Save Mood</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
