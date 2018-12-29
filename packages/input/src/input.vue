<template>
    <div class="container" :class="{'error':error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
               @change="$emit('change',$event.target.value)"
               @input="$emit('input',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               @blur="$emit('blur',$event.target.value)"
        >
        <template v-if="error">
            <v-icon name="error" v-if="error" class="icon-error"></v-icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script>
  import Icon from '../../icon/src/icon'

  export default {
    name: 'VInput',
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    },
    components: {
      'v-icon': Icon
    }
  }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 14px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #F1453D;
    .container {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        justify-items: center;
        margin: 10px 0;
        > :not(:last-child) {
            margin-right: .5em;
        }
        > input {
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &:hover {
                border-color: $border-color-hover;
            }
            &[disabled], &[readonly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }
        &.error {
            > input {
                border-color: $red;
            }
        }
        .icon-error {
            fill: $red;
        }
        .errorMessage {
            color: $red;
        }
    }
</style>