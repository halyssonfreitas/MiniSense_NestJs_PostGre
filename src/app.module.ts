import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SensorDeviceModule } from './sensor-device/sensor-device.module';
import { DataStreamModule } from './data-stream/data-stream.module';

@Module({
  imports: [UserModule, SensorDeviceModule, DataStreamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
