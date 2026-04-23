# -*- coding: utf-8 -*-
def t210002_0():
    """State 0"""
    while True:
        """State 2"""
        call = t210002_x5()
        assert IsMultiplayerInProgress() == 1
        """State 1"""
        call = t210002_x4()
        assert not IsMultiplayerInProgress()

# unseen headstone

def t210002_x0():
    """State 0,1"""
    assert t210002_x1(z1=99999, z2=99999, z3=99999, z4=99999)
    """State 2"""
    return 0

def t210002_x1(z1=99999, z2=99999, z3=99999, z4=99999):
    """State 0,1"""
    DebugEvent('会話判定')
    if not CheckSpecificPersonTalkHasEnded(0):
        """State 7"""
        ClearTalkProgressData()
        StopEventAnimWithoutForcingConversationEnd(0)
        """State 6"""
        ReportConversationEndToHavokBehavior()
    else:
        pass
    """State 2"""
    DebugEvent('汎用ダイアログ判定')
    if IsGenericDialogOpen() == 1:
        """State 3"""
        ForceCloseGenericDialog()
    else:
        pass
    """State 4"""
    DebugEvent('メニュー判定')
    if (CheckSpecificPersonMenuIsOpen(z1, 0) == 1 or CheckSpecificPersonMenuIsOpen(z2, 0) == 1 or CheckSpecificPersonMenuIsOpen(z3,
        0) == 1 or CheckSpecificPersonMenuIsOpen(z4, 0) == 1):
        """State 5"""
        ForceCloseMenu()
    else:
        pass
    """State 8"""
    return 0

def t210002_x2(flag2=_, flag3=_, action1=_):
    """State 0,3"""
    DebugEvent('フラグ判定')
    if not GetEventStatus(flag2 * 10 + 70000000 + flag3 * 1) or GetEventStatus(12100868) == 1:
        """State 1"""
        SetEventState(flag2 * 10 + 72100000 + flag3 * 1, 1)
        """State 4"""
        return 0
    else:
        """State 2"""
        OpenGenericDialog(1, action1, 1, 0, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
        """State 5"""
        return 1

def t210002_x3(actionbutton1=6112, actionbutton2=6132, flag1=12105032):
    """State 0"""
    while Loop('mainloop'):
        """State 1"""
        Label('L0')
        assert (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
                and not IsPlayerDead() and not IsCharacterDisabled())
        while True:
            """State 2"""
            Label('L1')
            if CheckActionButtonArea(actionbutton1):
                """State 4"""
                Label('L2')
                SetTalkTime(0.5)
                return 0
            elif (not (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
                  and not IsPlayerDead() and not IsCharacterDisabled())):
                Continue('mainloop')
            elif not GetEventStatus(flag1):
                Break('mainloop')
    """State 3"""
    if GetEventStatus(flag1) == 1:
        Goto('L1')
    elif (not (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer() and
          not IsPlayerDead() and not IsCharacterDisabled())):
        Goto('L0')
    elif CheckActionButtonArea(actionbutton2):
        Goto('L2')

def t210002_x4():
    """State 0,1"""
    return 0

def t210002_x5():
    """State 0"""
    while True:
        """State 1"""
        DebugEvent('待機')
        """State 5"""
        assert t210002_x3(actionbutton1=6112, actionbutton2=6132, flag1=12105032)
        """State 2"""
        ClearPlayerDamageInfo()
        """State 4"""
        call = t210002_x6()
        if call.Done():
            pass
        elif GetDistanceToPlayer() > 3 or HasPlayerBeenAttacked() == 1:
            """State 3"""
            assert t210002_x0()
    """Unused"""
    """State 6"""
    return 0

def t210002_x6():
    """State 0,6"""
    DebugEvent('起動済みのワープ椅子が存在するかを判定1')
    if GetEventStatus(12105032) == 1:
        """State 7"""
        DebugEvent('起動済みワープ椅子が存在する')
        if GetEventStatus(6707) == 1:
            pass
        else:
            """State 9"""
            OpenGenericDialog(1, 10011110, 1, 0, 1)
            """State 10"""
            SetEventState(6707, 1)
            def WhilePaused():
                SetTalkTime(0.33)
            assert not IsGenericDialogOpen()
        while True:
            """State 1"""
            ClearTalkListData()
            """State 4"""
            AddTalkListData(1, 70000000 + 280 * 10 + 0, 10000000 + 280 * 10000 + 7810 + 20 * 0)
            AddTalkListData(8, 70000000 + 280 * 10 + 3, 10000000 + 280 * 10000 + 7810 + 20 * 3)
            AddTalkListData(2, 70000000 + 280 * 10 + 1, 10000000 + 280 * 10000 + 7810 + 20 * 1)
            AddTalkListData(3, 70000000 + 280 * 10 + 2, 10000000 + 280 * 10000 + 7810 + 20 * 2)
            AddTalkListData(4, 70000000 + 250 * 10 + 0, 10000000 + 250 * 10000 + 7810 + 20 * 0)
            AddTalkListData(5, 70000000 + 250 * 10 + 2, 10000000 + 250 * 10000 + 7810 + 20 * 2)
            AddTalkListData(6, 70000000 + 250 * 10 + 1, 10000000 + 250 * 10000 + 7810 + 20 * 1)
            AddTalkListData(7, 70000000 + 211 * 10 + 0, 10000000 + 211 * 10000 + 7810 + 20 * 0)
            """State 2"""
            StartWarpMenuInit()
            def WhilePaused():
                SetTalkTime(0.33)
            if not GetTalkListEntryResult() or not CheckSpecificPersonMenuIsOpen(100, 0):
                """State 3"""
                break
            elif GetTalkListEntryResult() == 1:
                """State 11"""
                call = t210002_x2(flag2=280, flag3=0, action1=10010715)
                if call.Get() == 1:
                    pass
                elif call.Done():
                    break
            elif GetTalkListEntryResult() == 2:
                """State 12"""
                call = t210002_x2(flag2=280, flag3=1, action1=10010715)
                if call.Get() == 1:
                    pass
                elif call.Done():
                    break
                elif call.Done():
                    break
            elif GetTalkListEntryResult() == 3:
                """State 13"""
                call = t210002_x2(flag2=280, flag3=2, action1=10010725)
                if call.Get() == 1:
                    pass
                elif call.Done():
                    break
            elif GetTalkListEntryResult() == 4:
                """State 14"""
                call = t210002_x2(flag2=250, flag3=0, action1=10010715)
                if call.Get() == 1:
                    pass
                elif call.Done():
                    break
            elif GetTalkListEntryResult() == 5:
                """State 15"""
                call = t210002_x2(flag2=250, flag3=2, action1=10010715)
                if call.Get() == 1:
                    pass
                elif call.Done():
                    break
            elif GetTalkListEntryResult() == 6:
                """State 16"""
                call = t210002_x2(flag2=250, flag3=1, action1=10010715)
                if call.Get() == 1:
                    pass
                elif call.Done():
                    break
            elif GetTalkListEntryResult() == 7:
                """State 17"""
                call = t210002_x2(flag2=211, flag3=0, action1=10010715)
                if call.Get() == 1:
                    pass
                elif call.Done():
                    break
            elif GetTalkListEntryResult() == 8:
                """State 18"""
                call = t210002_x2(flag2=280, flag3=3, action1=10010715)
                if call.Get() == 1:
                    pass
                elif call.Done():
                    break
    else:
        """State 8"""
        DebugEvent('起動済みワープ椅子が存在しない')
        """State 5"""
        OpenGenericDialog(7, 10011100, 1, 0, 1)
        def WhilePaused():
            SetTalkTime(0.33)
        assert not IsGenericDialogOpen()
    """State 19"""
    return 0

