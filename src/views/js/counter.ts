import {ref, computed, ComputedRef} from 'vue'

export const useCounter = () => {
    let count = ref<number>(0)

    const add = () => {
        count.value++
    }

    let double:ComputedRef<number> = computed(():number=>count.value*2)

    return {
        add,
        double,
        count
    }
}