import {ref,Ref, computed, ComputedRef} from 'vue'

export const useMouse = ()=>{
    let x:Ref<number> = ref<number>(0)

    let double:ComputedRef<number> = computed(():number=>x.value*2)

    window.addEventListener('mousemove', (e)=>{
        x.value = e.pageX
    })
    return {x, double}
}