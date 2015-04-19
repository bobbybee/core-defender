int* userspace = 131072;
double* isTouching = 65536;
double* touchX = 65544;
double* touchY = 65552;

structptr(Sprite) core;
structptr(Sprite) missles = 80;

int* misslesActive = userspace;

int timeout = 10;

void shootMissleSprite(structptr(Sprite) missle, int n) {
  int* active = get(misslesActive, n);
  missle = newSprite(-2, -2, 0.4, 0.4, 0.5, 0, 1.0, 0.5);
  *active = 1;
}

void shootMissle() {
  int i;

  for(i = 0; i < 16; i += 1) {
    if(*(get(misslesActive, i)) == 0) {
      shootMissleSprite(get(missles, i), i);
      break;
    }
  }
}

void init() {
  // make sprites ahead of time
  core = newSprite(0, 0, 2, 2, 0, 0, 0.5, 0.5);
}

void loop() {
  int i = 0;
  structptr(Sprite) missle;
  double angle;

  core->a = atan2(0-*touchY, 0-*touchX);

  for(i = 0; i < 16; i += 1) {
    if(*(get(misslesActive, i)) == 1) {
      missle = get(missles, i);
      angle = atan2(missle->x, missle->y);
      missle->x -= cos(angle) * 0.05;
      missle->y -= sin(angle) * 0.05;
    }
  }

  timeout -= 1;
  if(timeout == 0) {
    timeout = 50;
    shootMissle();
  }
}
