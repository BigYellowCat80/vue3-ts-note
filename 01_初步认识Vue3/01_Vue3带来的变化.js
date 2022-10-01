// Vue3带来的变化
// 1. Vue3使用Proxy进行数据劫持
// 2. Vue3删除了一些不必要的API
// 3. Vue3编译方面的优化
// 4. Vue3由Options API到Composition API
// 5. Vue3的Hooks函数增加代码的复用性
// 6. Vu3中的data必须是函数，Vue2.x中的data可以是函数或对象

// 1. Vue3使用Proxy进行数据劫持
// 在Vue2.x中使用Object.definePropery来劫持数据的getter和setter方法，但是这种方式存在一个缺陷，当给对象添加或者删除属性时，是无法劫持和监听的，因此Vue2.x需要使用特殊的API比如$set或$delete

// 2. Vue3删除了一些不必要的API
// 移除了实例上的$on, $off, $once
// 移除了一些特性：如filter、内联模板

// 3. Vue3编译方面的优化
// 生成Block Tree
// Slot编译优化
// Diff算法优化

// 4. Vue3由Options API到Composition API
// Options API包括data, props, methods, computed, 生命周期等等这些选项
// Composition API可以将相关联的代码放到同一处进行管理，而不需要在多个Options之间寻找

// 5. Vue3的Hooks函数增加代码的复用性
// 在Vue2.x中，通常通过mixins在多个组件之间共享逻辑
// Vue3中通过Hooks函数将一部分独立的逻辑抽取出去，并且它们还可以做到是响应式的
