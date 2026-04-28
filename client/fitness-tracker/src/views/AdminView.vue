<script setup lang="ts"></script>

<template>
  <div>
    <button class="button is-danger">
      <span>
        <i class="fas fa-plus"> </i>
      </span>
      <span> Add User </span>
    </button>
  </div>
  <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>User Name</th>
        <th>Administrator</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>LuneChow</td>
        <td>Doe</td>
        <td>lunechow@example.com</td>
        <td>Admin</td>
        <td>
          <button class="button is-small is-danger">
            <span class="icon is-small">
              <i class="fas fa-trash"></i>
            </span>
          </button>
        </td>
      </tr>
      <tr>
        <td>IrfChow</td>
        <td>Doe</td>
        <td>irfchow@example.com</td>
        <td>User #1</td>
        <td>
          <button class="button is-small is-danger">
            <span class="icon is-small">
              <i class="fas fa-trash"></i>
            </span>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
