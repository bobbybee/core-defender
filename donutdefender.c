int* userspace = 131072;

structptr(Sprite) core;

structptr(Sprite) missles;
int* misslesActive = userspace + 0;

int timeout = 100;

void shootMissleSprite(structptr(Sprite) missle) {
  missle = newSprite(-2, -2, 0.4, 0.4, 0.5, 0, 1.0, 0.5);
}

void shootMissle() {
  int i;

  for(i = 0; i < 1; i += 1) {
    if(get(misslesActive, i) == 0) {
      shootMissleSprite(get(missles, i));
    }
  }
}

void init() {
  // make sprites ahead of time
  core = newSprite(0.5, 0.5, 1, 1, 0, 0, 0.5, 0.5);
}

void loop() {
  int i;

  for(i = 0; i < 1; i += 1) {
    if(get(misslesActive, i) == 1) {
      structptr(Sprite) missle = get(missles, i);
      missle->x += 0.1;
      missle->y += 0.1;
    }
  }

  timeout -= 1;
  if(timeout == 0) {
    timeout = 100;
    shootMissle();
  }
}
