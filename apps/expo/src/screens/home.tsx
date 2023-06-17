import React from "react";
import { Layout, Button, Text } from "@ui-kitten/components";

import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlashList } from "@shopify/flash-list";
import type { inferProcedureOutput } from "@trpc/server";
import type { AppRouter } from "@acme/api";

import { trpc } from "../utils/trpc";
import CalendarBar from "../components/CalendarBar/CalendarBar";
import ScreenTabTitles from "../components/UI/ScreenTabTitles";
import TasksView from "../components/Tasks/TasksView";

export const HomeScreen = () => {
  // const postQuery = trpc.post.all.useQuery();
  // const [showPost, setShowPost] = React.useState<string | null>(null);
  return (
    <Layout level="1" style={style.container}>
      <SafeAreaView>
        <View className="pt-12">
          <CalendarBar />
          <ScreenTabTitles />
          <TasksView />
        </View>
      </SafeAreaView>
    </Layout>
  );
};

const style = StyleSheet.create({
  container: {
    // height: "100%",
    // width: "100%",
    flex: 1,
  },
});

// const SignOut = () => {
//   const { signOut } = useAuth();
//   return (
//     <View className="rounded-lg border-2 border-gray-500 p-4">
//       <Button
//         title="Sign Out"
//         onPress={() => {
//           signOut();
//         }}
//       />
//     </View>
//   );
// };

// const PostCard: React.FC<{
//   post: inferProcedureOutput<AppRouter["post"]["all"]>[number];
// }> = ({ post }) => {
//   return (
//     <View className="rounded-lg border-2 border-gray-500 p-4">
//       <Text className="text-xl font-semibold text-[#cc66ff]">{post.title}</Text>
//       <Text className="text-white">{post.content}</Text>
//     </View>
//   );
// };

// const CreatePost: React.FC = () => {
//   const utils = trpc.useContext();
//   const { mutate } = trpc.post.create.useMutation({
//     async onSuccess() {
//       await utils.post.all.invalidate();
//     },
//   });

//   const [title, onChangeTitle] = React.useState("");
//   const [content, onChangeContent] = React.useState("");

//   return (
//     <View className="flex flex-col border-t-2 border-gray-500 p-4">
//       <TextInput
//         className="mb-2 rounded border-2 border-gray-500 p-2 text-white"
//         onChangeText={onChangeTitle}
//         placeholder="Title"
//       />
//       <TextInput
//         className="mb-2 rounded border-2 border-gray-500 p-2 text-white"
//         onChangeText={onChangeContent}
//         placeholder="Content"
//       />
//       <TouchableOpacity
//         className="rounded bg-[#cc66ff] p-2"
//         onPress={() => {
//           mutate({
//             title,
//             content,
//           });
//         }}
//       >
//         <Text className="font-semibold text-white">Publish post</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export const HomeScreen = () => {
//   const postQuery = trpc.post.all.useQuery();
//   const [showPost, setShowPost] = React.useState<string | null>(null);

//   return (
//     <SafeAreaView className="bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c]">
//       <View className="h-full w-full p-4">
//         <Text className="mx-auto pb-2 text-5xl font-bold text-white">
//           Create <Text className="text-[#cc66ff]">T3</Text> Turbo
//         </Text>

//         <View className="py-2">
//           {showPost ? (
//             <Text className="text-white">
//               <Text className="font-semibold">Selected post:</Text>
//               {showPost}
//             </Text>
//           ) : (
//             <Text className="font-semibold italic text-white">
//               Press on a post
//             </Text>
//           )}
//         </View>

//         <FlashList
//           data={postQuery.data}
//           estimatedItemSize={20}
//           ItemSeparatorComponent={() => <View className="h-2" />}
//           renderItem={(p) => (
//             <TouchableOpacity onPress={() => setShowPost(p.item.id)}>
//               <PostCard post={p.item} />
//             </TouchableOpacity>
//           )}
//         />

//         <CreatePost />
//         <SignOut />
//       </View>
//     </SafeAreaView>
//   );
// };
