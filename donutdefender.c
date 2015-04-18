int* userspace = 131072;

structptr(Sprite) core;

structptr(Sprite) missles = 80;
int* misslesActive = userspace + (72 * 32);

int timeout = 100;

void shootMissleSprite(structptr(Sprite) missle, int n) {
  int* active;

  missle = newSprite(-2, -2, 0.4, 0.4, 0.5, 0, 1.0, 0.5);
  active = get(misslesActive, n);
  *active = 1;
}

void shootMissle() {
  int i;
  int* active;

  for(i = 0; i < 1; i += 1) {
    active = get(misslesActive, i);

    if(*active == 0) {
      shootMissleSprite(get(missles, i), i);
    }
  }
}

void init() {
  // make sprites ahead of time
  core = newSprite(0.5, 0.5, 1, 1, 0, 0, 0.5, 0.5);
}

void loop() {
  int i = 0;
  int* active;
  structptr(Sprite) missle;

  for(i = 0; i < 1; i += 1) {
    active = get(misslesActive, i);
    if(*active == 1) {
      missle = get(missles, i);
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
