![123](netty.markdownPic/123.png)



```java
	private static final void findMinMax(float x0, float x1, float x2, Vector3f minMax) {
		minMax.set(x0, x0, 0);
		if (x1 < minMax.x) {
			minMax.setX(x1);
		}
		if (x1 > minMax.y) {
			minMax.setY(x1);
		}
		if (x2 < minMax.x) {
			minMax.setX(x2);
		}
		if (x2 > minMax.y) {
			minMax.setY(x2);
		}
	}
```

