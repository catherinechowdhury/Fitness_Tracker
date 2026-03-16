<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="columns">
      <div class="column">
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
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img src="https://bulma.io/assets/images/placeholders/128x128.png" />
              </p>
            </figure>
            <div class="media-content">
              <div class="field">
                <p class="control">
                  <textarea class="textarea" placeholder="Add a comment..."></textarea>
                </p>
              </div>
              <!-- <nav class="level">
                <div class="level-left">
                  <div class="level-item">
                    <a class="button is-info">Submit</a>
                  </div>
                </div>
                <div class="level-right">
                  <div class="level-item">
                    <label class="checkbox">
                      <input type="checkbox" /> Press enter to submit
                    </label>
                  </div>
                </div>
              </nav> -->
            </div>
          </article>
          <button id="submit" class="button is-primary">Save Mood</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
