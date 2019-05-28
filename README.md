# 简易版 jquery 图片懒加载插件

预览：[https://wencaizhang.github.io/jquery.lazyload/](https://wencaizhang.github.io/jquery.lazyload/)

## 使用

```html
<script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
<script src="./jquery.lazyload.js"></script>
<script>
  $(function() {
    $(".container img").lazyload({
      distance: 0,
      placeholder: "",
      immediate: true
    });
  });
</script>
```

## 配置项

| 字段        | 含义                                 | 默认值 |
| ----------- | ------------------------------------ | ------ |
| distance    | 当图片元素距离屏幕底部多远时载入图片 | 10     |
| placeholder | 占位图片                             | null   |
| immediate   | 是否立即触发检测                     | false  |
